import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { quoteRequestSchema } from "@/lib/validations/quote";
import { generateQuotePDF } from "@/lib/pdf/generateQuotePDF";

// Générer un numéro de devis unique
function generateQuoteNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  const timestamp = Date.now().toString(36).substring(-4).toUpperCase();
  return `DEV-${year}-${random}${timestamp}`;
}

// POST /api/quotes - Créer une nouvelle demande de devis
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation des données
    const validationResult = quoteRequestSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Données invalides",
          details: validationResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { configuration, contactInfo, projectInfo, screenshotDataUrl } =
      validationResult.data;

    // Calculer les totaux
    const totalHT = configuration.price / 1.2; // Prix HT (TVA 20%)
    const tva = configuration.price - totalHT;
    const totalTTC = configuration.price;

    // Générer le numéro de devis
    const quoteNumber = generateQuoteNumber();

    // Date d'expiration (30 jours)
    const dateExpiration = new Date();
    dateExpiration.setDate(dateExpiration.getDate() + 30);

    // Chercher ou créer l'utilisateur
    let user = await prisma.user.findUnique({
      where: { email: contactInfo.email },
    });

    if (!user) {
      // Créer un nouvel utilisateur
      user = await prisma.user.create({
        data: {
          email: contactInfo.email,
          passwordHash: "", // Sera défini lors de l'activation du compte
          type:
            contactInfo.type === "professionnel"
              ? "client_pro"
              : "client_particulier",
          nom: contactInfo.nom,
          prenom: contactInfo.prenom,
          telephone: contactInfo.telephone,
          raisonSociale: contactInfo.raisonSociale,
          siret: contactInfo.siret,
          validated: false,
          active: true,
        },
      });

      // Créer l'adresse du chantier
      await prisma.address.create({
        data: {
          userId: user.id,
          label: "Chantier",
          rue: projectInfo.adresseChantier.rue,
          codePostal: projectInfo.adresseChantier.codePostal,
          ville: projectInfo.adresseChantier.ville,
          isDefault: true,
        },
      });
    }

    // Créer le devis
    const quote = await prisma.quote.create({
      data: {
        numero: quoteNumber,
        userId: user.id,
        dateDemande: new Date(),
        dateExpiration,
        status: "en_attente",
        totalHT,
        tva,
        totalTTC,
        commentaireClient: projectInfo.commentaire || null,
      },
    });

    // Chercher ou créer un produit générique pour cette famille
    let product = await prisma.product.findFirst({
      where: {
        slug: `${configuration.family.toLowerCase()}-sur-mesure`,
      },
    });

    if (!product) {
      // Chercher ou créer la famille de produit
      let family = await prisma.productFamily.findFirst({
        where: {
          slug: configuration.family.toLowerCase(),
        },
      });

      if (!family) {
        family = await prisma.productFamily.create({
          data: {
            nom: configuration.family,
            slug: configuration.family.toLowerCase(),
            description: `Famille de produits ${configuration.family}`,
            active: true,
          },
        });
      }

      // Créer le produit générique
      product = await prisma.product.create({
        data: {
          nom: `${configuration.family} sur mesure`,
          slug: `${configuration.family.toLowerCase()}-sur-mesure`,
          familleId: family.id,
          prixBaseHT: totalHT,
          actif: true,
        },
      });
    }

    // Créer l'item du devis
    await prisma.quoteItem.create({
      data: {
        quoteId: quote.id,
        productId: product.id,
        quantity: 1,
        configSnapshot: {
          ...configuration,
          projectInfo: {
            adresseChantier: projectInfo.adresseChantier,
            typeProjet: projectInfo.typeProjet,
            delaiSouhaite: projectInfo.delaiSouhaite,
            poseRequise: projectInfo.poseRequise,
          },
          screenshot: screenshotDataUrl || null,
        },
        prixUnitaireHT: totalHT,
        prixTotalHT: totalHT,
      },
    });

    // TODO: Générer le PDF et le sauvegarder
    // TODO: Envoyer l'email de confirmation au client
    // TODO: Envoyer la notification à l'admin

    return NextResponse.json(
      {
        success: true,
        quoteNumber,
        quoteId: quote.id,
        message: "Votre demande de devis a été envoyée avec succès.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de la création du devis:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors de la création du devis.",
      },
      { status: 500 }
    );
  }
}

// GET /api/quotes - Récupérer les devis de l'utilisateur connecté
export async function GET(request: NextRequest) {
  try {
    // TODO: Récupérer l'utilisateur depuis la session
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email requis" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        quotes: {
          include: {
            items: {
              include: {
                product: {
                  include: {
                    famille: true,
                  },
                },
              },
            },
          },
          orderBy: {
            dateDemande: "desc",
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Utilisateur non trouvé" },
        { status: 404 }
      );
    }

    const quotes = user.quotes.map((quote) => ({
      id: quote.id,
      numero: quote.numero,
      dateDemande: quote.dateDemande,
      dateExpiration: quote.dateExpiration,
      status: quote.status,
      totalHT: quote.totalHT,
      tva: quote.tva,
      totalTTC: quote.totalTTC,
      itemsCount: quote.items.length,
      productFamily: quote.items[0]?.product?.famille?.nom || null,
    }));

    return NextResponse.json({
      success: true,
      quotes,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des devis:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors de la récupération des devis.",
      },
      { status: 500 }
    );
  }
}







