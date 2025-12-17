/**
 * Service d'envoi d'emails
 * Utilise nodemailer - à configurer avec vos credentials SMTP
 */

import { renderToStaticMarkup } from "react-dom/server";
import type { ReactElement } from "react";

// Types
interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}

interface SendEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Convertit un composant React en HTML pour l'email
 */
export function renderEmailTemplate(template: ReactElement): string {
  return renderToStaticMarkup(template);
}

/**
 * Envoie un email
 * TODO: Configurer avec nodemailer ou un service comme Resend, SendGrid, etc.
 */
export async function sendEmail(options: EmailOptions): Promise<SendEmailResult> {
  const { to, subject, html, text } = options;

  // En développement, on log simplement l'email
  if (process.env.NODE_ENV === "development") {
    console.log("=== EMAIL (DEV MODE) ===");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("HTML length:", html.length);
    console.log("========================");

    return {
      success: true,
      messageId: `dev-${Date.now()}`,
    };
  }

  // En production, utiliser un service d'envoi réel
  try {
    // Exemple avec nodemailer (à décommenter et configurer)
    /*
    const nodemailer = await import('nodemailer');
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"AZ Construction" <${process.env.SMTP_FROM || 'noreply@zaconstruction.fr'}>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      text: text || '',
      html,
    });

    return {
      success: true,
      messageId: info.messageId,
    };
    */

    // Exemple avec Resend (à décommenter et configurer)
    /*
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'AZ Construction <noreply@zaconstruction.fr>',
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    });

    if (error) {
      throw new Error(error.message);
    }

    return {
      success: true,
      messageId: data?.id,
    };
    */

    // Fallback: log en production si pas configuré
    console.warn("Email service not configured. Email not sent:", {
      to,
      subject,
    });

    return {
      success: false,
      error: "Email service not configured",
    };
  } catch (error) {
    console.error("Failed to send email:", error);

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Envoie l'email de confirmation de demande de devis au client
 */
export async function sendQuoteConfirmationEmail(
  to: string,
  data: {
    customerName: string;
    quoteNumber: string;
    productFamily: string;
    productStyle: string;
    dimensions: { width: number; height: number };
    totalTTC: number;
    dateExpiration: string;
  }
): Promise<SendEmailResult> {
  // Import dynamique du template
  const { QuoteConfirmationEmail } = await import(
    "./templates/quoteConfirmation"
  );
  const { createElement } = await import("react");

  const html = renderEmailTemplate(createElement(QuoteConfirmationEmail, data));

  return sendEmail({
    to,
    subject: `Confirmation de votre demande de devis ${data.quoteNumber} - AZ Construction`,
    html,
  });
}

/**
 * Envoie la notification de nouvelle demande de devis à l'admin
 */
export async function sendQuoteNotificationEmail(
  data: {
    quoteNumber: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    customerType: "particulier" | "professionnel";
    companyName?: string;
    productFamily: string;
    productStyle: string;
    dimensions: { width: number; height: number };
    material: string;
    color: string;
    options: string[];
    totalTTC: number;
    adresseChantier: {
      rue: string;
      codePostal: string;
      ville: string;
    };
    typeProjet: string;
    delaiSouhaite: string;
    poseRequise: boolean;
    commentaire?: string;
    dateDemanDe: string;
  }
): Promise<SendEmailResult> {
  const adminEmail = process.env.ADMIN_EMAIL || "admin@zaconstruction.fr";

  // Import dynamique du template
  const { QuoteNotificationEmail } = await import(
    "./templates/quoteNotification"
  );
  const { createElement } = await import("react");

  const html = renderEmailTemplate(createElement(QuoteNotificationEmail, data));

  return sendEmail({
    to: adminEmail,
    subject: `🔔 Nouvelle demande de devis ${data.quoteNumber} - ${data.customerName}`,
    html,
  });
}

export default sendEmail;


