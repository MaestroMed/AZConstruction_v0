import { Resend } from "resend";

// Lazy initialization pour éviter les erreurs au build
let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  return resendInstance;
}

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  const from = process.env.EMAIL_FROM || "AZ Construction <noreply@zaconstruction.fr>";

  try {
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      replyTo,
    });

    if (error) {
      console.error("Email error:", error);
      throw new Error(error.message);
    }

    return { success: true, id: data?.id };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}

// Templates d'emails
export const emailTemplates = {
  devisConfirmation: (data: { nom: string; numero: string; total: string }) => ({
    subject: `Votre demande de devis n°${data.numero} - AZ Construction`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0a1628, #1e3a5f); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px; background: #f8f9fa; }
          .highlight { background: #00d4ff; color: #0a1628; padding: 15px; border-radius: 8px; text-align: center; font-size: 24px; font-weight: bold; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          .btn { display: inline-block; background: #00d4ff; color: #0a1628; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>AZ Construction</h1>
            <p>L'acier sur mesure, vite et bien.</p>
          </div>
          <div class="content">
            <p>Bonjour ${data.nom},</p>
            <p>Nous avons bien reçu votre demande de devis. Notre équipe l'examine actuellement et vous recontactera dans les 24-48h.</p>
            <div class="highlight">
              Devis n°${data.numero}<br>
              <small>Montant estimé : ${data.total} € TTC</small>
            </div>
            <p style="margin-top: 20px;">Vous pouvez suivre l'avancement de votre demande depuis votre espace client.</p>
            <p style="text-align: center; margin-top: 30px;">
              <a href="${process.env.NEXTAUTH_URL}/compte/devis/${data.numero}" class="btn">Voir mon devis</a>
            </p>
          </div>
          <div class="footer">
            <p>AZ Construction - 23 Chemin du Bac des Aubins, 95820 Bruyères-sur-Oise</p>
            <p>Tél: +33 1 23 45 67 89 | contact@zaconstruction.fr</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  commandeConfirmation: (data: { nom: string; numero: string; total: string }) => ({
    subject: `Confirmation de commande n°${data.numero} - AZ Construction`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0a1628, #1e3a5f); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; background: #f8f9fa; }
          .success { background: #10b981; color: white; padding: 15px; border-radius: 8px; text-align: center; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>AZ Construction</h1>
          </div>
          <div class="content">
            <div class="success">
              ✓ Commande confirmée
            </div>
            <p style="margin-top: 20px;">Bonjour ${data.nom},</p>
            <p>Votre commande n°<strong>${data.numero}</strong> a été confirmée.</p>
            <p><strong>Total :</strong> ${data.total} € TTC</p>
            <p>Nous vous tiendrons informé de l'avancement de la fabrication.</p>
          </div>
          <div class="footer">
            <p>AZ Construction - Métallerie sur mesure</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  adminNotification: (data: { type: string; numero: string; client: string }) => ({
    subject: `[Admin] Nouvelle ${data.type} n°${data.numero}`,
    html: `
      <h2>Nouvelle ${data.type}</h2>
      <p><strong>Numéro :</strong> ${data.numero}</p>
      <p><strong>Client :</strong> ${data.client}</p>
      <p><a href="${process.env.NEXTAUTH_URL}/admin/${data.type === 'commande' ? 'commandes' : 'devis'}/${data.numero}">Voir dans le back-office</a></p>
    `,
  }),
};
