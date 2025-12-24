import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST: Créer un nouveau message de contact
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, email, telephone, sujet, message, type, entreprise } = body;

    // Validation basique
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: "Les champs nom, email, sujet et message sont requis" },
        { status: 400 }
      );
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Créer le message en base de données
    const contactMessage = await prisma.contactMessage.create({
      data: {
        nom,
        email,
        telephone: telephone || null,
        sujet,
        message,
        type: type || "particulier",
        entreprise: entreprise || null,
        status: "nouveau",
      },
    });

    // TODO: Envoyer un email de notification à l'admin
    // Utiliser Resend si configuré
    try {
      const { sendEmail } = await import("@/lib/email/resend");
      
      // Email à l'admin
      await sendEmail({
        to: process.env.ADMIN_EMAIL || "contact@az-construction.fr",
        subject: `[AZ Construction] Nouveau message: ${sujet}`,
        html: `
          <h2>Nouveau message de contact</h2>
          <p><strong>De:</strong> ${nom} (${email})</p>
          ${telephone ? `<p><strong>Téléphone:</strong> ${telephone}</p>` : ""}
          ${entreprise ? `<p><strong>Entreprise:</strong> ${entreprise}</p>` : ""}
          <p><strong>Type:</strong> ${type === "professionnel" ? "Professionnel" : "Particulier"}</p>
          <p><strong>Sujet:</strong> ${sujet}</p>
          <hr>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      // Email de confirmation au visiteur
      await sendEmail({
        to: email,
        subject: "Nous avons bien reçu votre message - AZ Construction",
        html: `
          <h2>Merci pour votre message !</h2>
          <p>Bonjour ${nom},</p>
          <p>Nous avons bien reçu votre demande concernant "<strong>${sujet}</strong>".</p>
          <p>Notre équipe vous répondra dans les meilleurs délais, généralement sous 24h ouvrées.</p>
          <br>
          <p>Cordialement,</p>
          <p><strong>L'équipe AZ Construction</strong></p>
          <p>Tél: 01 23 45 67 89</p>
        `,
      });
    } catch (emailError) {
      console.error("Erreur envoi email:", emailError);
      // On continue même si l'email échoue
    }

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été envoyé. Nous vous répondrons sous 24h.",
      id: contactMessage.id,
    });
  } catch (error) {
    console.error("Erreur création message contact:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

// GET: Récupérer les messages (admin only)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit") || "50");

    const messages = await prisma.contactMessage.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: "desc" },
      take: limit,
    });

    return NextResponse.json({ success: true, messages });
  } catch (error) {
    console.error("Erreur récupération messages:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des messages" },
      { status: 500 }
    );
  }
}

// PATCH: Mettre à jour un message (admin only)
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ error: "ID requis" }, { status: 400 });
    }

    const updated = await prisma.contactMessage.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(notes !== undefined && { notes }),
      },
    });

    return NextResponse.json({ success: true, message: updated });
  } catch (error) {
    console.error("Erreur mise à jour message:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}

