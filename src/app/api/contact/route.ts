import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactConfirmation, sendContactNotificationToAdmin } from "@/lib/email";

// POST: Soumettre un formulaire de contact
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, email, telephone, sujet, message, type = "particulier", entreprise } = body;

    // Validation
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
        { error: "Format d'email invalide" },
        { status: 400 }
      );
    }

    // Sauvegarder le message en base de données
    const contactMessage = await prisma.contactMessage.create({
      data: {
        nom,
        email,
        telephone,
        sujet,
        message,
        type,
        entreprise,
        status: "nouveau",
      },
    });

    // Envoyer l'email de confirmation au client
    const confirmationResult = await sendContactConfirmation(email, nom);
    if (!confirmationResult.success) {
      console.warn("Échec envoi confirmation:", confirmationResult.error);
    }

    // Envoyer la notification à l'admin
    const notificationResult = await sendContactNotificationToAdmin({
      name: nom,
      email,
      phone: telephone,
      subject: sujet,
      message,
      type,
    });
    if (!notificationResult.success) {
      console.warn("Échec envoi notification admin:", notificationResult.error);
    }

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.",
      id: contactMessage.id,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}

// GET: Récupérer les messages de contact (admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const limit = searchParams.get("limit");

    const messages = await prisma.contactMessage.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: "desc" },
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json({
      success: true,
      messages,
      count: messages.length,
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des messages" },
      { status: 500 }
    );
  }
}

// PUT: Mettre à jour le statut d'un message
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ error: "ID requis" }, { status: 400 });
    }

    const message = await prisma.contactMessage.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(notes !== undefined && { notes }),
      },
    });

    return NextResponse.json({ success: true, message });
  } catch (error) {
    console.error("Error updating contact message:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}
