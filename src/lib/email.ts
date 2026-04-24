/**
 * Service d'envoi d'emails
 * Utilise Resend comme provider principal
 * Fallback: logs en dev si pas de clé API
 */

interface EmailAttachment {
  filename: string;
  path: string; // URL to fetch the file from
}

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
}

interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

// Configuration email par défaut (surchargeable via env)
const DEFAULT_FROM = process.env.EMAIL_FROM || "AZ Construction <noreply@azconstruction.fr>";
const DEFAULT_REPLY_TO = process.env.EMAIL_REPLY_TO || "contact@azconstruction.fr";

/**
 * Envoie un email via Resend
 *
 * Comportement :
 * - Production SANS RESEND_API_KEY → success: false (erreur claire côté formulaire,
 *   au lieu du faux success qui masquait les emails jamais envoyés)
 * - Développement SANS clé → log + success: true (utile pour debug sans spam réel)
 * - Avec clé → appel réel Resend, success réflète la réponse API
 */
export async function sendEmail(options: EmailOptions): Promise<EmailResult> {
  const { to, subject, html, from = DEFAULT_FROM, replyTo = DEFAULT_REPLY_TO, attachments } = options;
  const resendApiKey = process.env.RESEND_API_KEY;
  const isProd = process.env.NODE_ENV === "production";

  if (!resendApiKey) {
    if (isProd) {
      console.error("[email] RESEND_API_KEY manquant en production — email NON envoyé", {
        to: Array.isArray(to) ? to.join(", ") : to,
        subject,
      });
      return {
        success: false,
        error: "Service email non configuré (RESEND_API_KEY manquant)",
      };
    }

    // Dev: log puis faux success (évite de polluer Resend en dev)
    console.log("📧 [DEV] Email qui serait envoyé:");
    console.log(`   To: ${Array.isArray(to) ? to.join(", ") : to}`);
    console.log(`   Subject: ${subject}`);
    console.log(`   From: ${from}`);
    console.log(`   ReplyTo: ${replyTo}`);
    console.log(`   Content: ${html.substring(0, 200)}...`);

    return {
      success: true,
      messageId: `dev-${Date.now()}`,
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
        reply_to: replyTo,
        ...(attachments && attachments.length > 0 ? { attachments } : {}),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("[email] Resend API error", { status: response.status, errorData });
      return {
        success: false,
        error: errorData?.message || `Erreur Resend ${response.status}`,
      };
    }

    const data = await response.json();
    return {
      success: true,
      messageId: data.id,
    };
  } catch (error) {
    console.error("[email] send error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erreur inconnue",
    };
  }
}

/**
 * Templates d'emails
 */
export const emailTemplates = {
  // Email de confirmation de demande de contact
  contactConfirmation: (name: string) => ({
    subject: "Votre demande a bien été reçue - AZ Construction",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1e3a5f 0%, #0ea5e9 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">AZ Construction</h1>
            <p style="color: rgba(255,255,255,0.8); margin-top: 8px; font-size: 14px;">Métallerie & Thermolaquage</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #1e3a5f; margin-top: 0;">Bonjour ${name},</h2>
            <p style="color: #4b5563; line-height: 1.6;">
              Nous avons bien reçu votre demande et nous vous en remercions.
            </p>
            <p style="color: #4b5563; line-height: 1.6;">
              Notre équipe va étudier votre projet et vous recontactera dans les <strong>24 à 48 heures ouvrées</strong>.
            </p>
            <p style="color: #4b5563; line-height: 1.6;">
              En attendant, n'hésitez pas à consulter nos réalisations sur notre site.
            </p>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="https://www.azconstruction.fr/realisations" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9 0%, #22d3ee 100%); color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 600;">
                Voir nos réalisations
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              <strong>AZ Construction</strong><br>
              Zone Industrielle - Val d'Oise<br>
              Tél: 01 XX XX XX XX
            </p>
            <p style="color: #9ca3af; margin-top: 16px; font-size: 12px;">
              © ${new Date().getFullYear()} AZ Construction. Tous droits réservés.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  // Notification admin de nouvelle demande
  newContactNotification: (data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    type: string;
    attachments?: string[];
  }) => ({
    subject: `🔔 Nouvelle demande de contact - ${data.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            📬 Nouvelle demande de contact
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280; width: 120px;">Nom</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1f2937; font-weight: 500;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${data.email}" style="color: #0ea5e9;">${data.email}</a>
              </td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;">Téléphone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="tel:${data.phone}" style="color: #0ea5e9;">${data.phone}</a>
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;">Type</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <span style="background-color: ${data.type === "professionnel" ? "#dbeafe" : "#dcfce7"}; color: ${data.type === "professionnel" ? "#1e40af" : "#166534"}; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 500;">
                  ${data.type === "professionnel" ? "Professionnel" : "Particulier"}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #6b7280;">Sujet</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #1f2937; font-weight: 500;">${data.subject}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
            <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">Message :</p>
            <p style="color: #1f2937; margin: 0; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>
          
          ${data.attachments && data.attachments.length > 0 ? `
          <div style="margin-top: 20px; padding: 20px; background-color: #eff6ff; border-radius: 8px; border: 1px solid #bfdbfe;">
            <p style="color: #1e40af; margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">📎 Pièces jointes (${data.attachments.length}) :</p>
            <ul style="margin: 0; padding-left: 20px;">
              ${data.attachments.map((url, i) => {
                const filename = url.split("/").pop() || `fichier-${i + 1}`;
                return `<li style="margin-bottom: 6px;"><a href="${url}" style="color: #0ea5e9; word-break: break-all;" target="_blank">${filename}</a></li>`;
              }).join("")}
            </ul>
          </div>
          ` : ""}
          
          <div style="margin-top: 30px; text-align: center;">
            <a href="https://www.azconstruction.fr/admin" style="display: inline-block; background-color: #1e3a5f; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 500;">
              Accéder au back-office
            </a>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  // Email de confirmation de devis
  quoteConfirmation: (name: string, quoteNumber: string) => ({
    subject: `Votre demande de devis ${quoteNumber} - AZ Construction`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(135deg, #1e3a5f 0%, #0ea5e9 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">AZ Construction</h1>
          </div>
          
          <div style="padding: 40px 30px;">
            <div style="background: linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%); border-radius: 8px; padding: 20px; text-align: center; margin-bottom: 30px;">
              <p style="color: #166534; margin: 0; font-size: 18px;">✅ Demande enregistrée</p>
              <p style="color: #166534; margin: 8px 0 0 0; font-size: 24px; font-weight: bold;">${quoteNumber}</p>
            </div>
            
            <h2 style="color: #1e3a5f; margin-top: 0;">Bonjour ${name},</h2>
            <p style="color: #4b5563; line-height: 1.6;">
              Votre demande de devis a bien été enregistrée. Notre équipe technique va l'étudier et vous enverra une proposition détaillée sous <strong>48 à 72 heures ouvrées</strong>.
            </p>
            <p style="color: #4b5563; line-height: 1.6;">
              Pour toute question, n'hésitez pas à nous contacter en mentionnant votre numéro de devis.
            </p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              <strong>AZ Construction</strong> • Tél: 01 XX XX XX XX
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),
};

/**
 * Envoie un email de confirmation de contact
 */
export async function sendContactConfirmation(to: string, name: string): Promise<EmailResult> {
  const template = emailTemplates.contactConfirmation(name);
  return sendEmail({
    to,
    ...template,
  });
}

/**
 * Envoie une notification admin pour un nouveau contact
 */
export async function sendContactNotificationToAdmin(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: string;
  attachments?: string[];
}): Promise<EmailResult> {
  const template = emailTemplates.newContactNotification(data);
  const adminEmail = process.env.ADMIN_EMAIL || "contact@azconstruction.fr";

  // Build Resend attachments from URLs
  const emailAttachments: EmailAttachment[] = (data.attachments || [])
    .filter(url => url && !url.startsWith("data:"))
    .map((url, i) => ({
      filename: url.split("/").pop() || `piece-jointe-${i + 1}`,
      path: url,
    }));

  return sendEmail({
    to: adminEmail,
    ...template,
    attachments: emailAttachments.length > 0 ? emailAttachments : undefined,
  });
}
