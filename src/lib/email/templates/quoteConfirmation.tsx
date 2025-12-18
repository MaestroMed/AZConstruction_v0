/**
 * Template d'email de confirmation de demande de devis
 * À utiliser avec react-email ou un autre système de templating
 */

import * as React from "react";

interface QuoteConfirmationEmailProps {
  customerName: string;
  quoteNumber: string;
  productFamily: string;
  productStyle: string;
  dimensions: { width: number; height: number };
  totalTTC: number;
  dateExpiration: string;
}

export function QuoteConfirmationEmail({
  customerName,
  quoteNumber,
  productFamily,
  productStyle,
  dimensions,
  totalTTC,
  dateExpiration,
}: QuoteConfirmationEmailProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Confirmation de votre demande de devis</title>
      </head>
      <body
        style={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#f5f5f5",
          margin: 0,
          padding: 0,
        }}
      >
        <table
          role="presentation"
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Header */}
          <tr>
            <td
              style={{
                backgroundColor: "#1a365d",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  color: "#ffffff",
                  margin: 0,
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                AZ Construction
              </h1>
              <p
                style={{
                  color: "#4fc3f7",
                  margin: "8px 0 0 0",
                  fontSize: "14px",
                }}
              >
                Métallerie • Serrurerie • Thermolaquage
              </p>
            </td>
          </tr>

          {/* Success Icon */}
          <tr>
            <td style={{ padding: "40px 32px 20px", textAlign: "center" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#ffffff", fontSize: "32px" }}>✓</span>
              </div>
            </td>
          </tr>

          {/* Title */}
          <tr>
            <td style={{ padding: "0 32px 20px", textAlign: "center" }}>
              <h2
                style={{
                  color: "#1a365d",
                  margin: 0,
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Demande de devis reçue !
              </h2>
            </td>
          </tr>

          {/* Greeting */}
          <tr>
            <td style={{ padding: "0 32px 20px" }}>
              <p style={{ color: "#4a5568", margin: 0, fontSize: "16px" }}>
                Bonjour {customerName},
              </p>
              <p
                style={{
                  color: "#4a5568",
                  margin: "12px 0 0 0",
                  fontSize: "16px",
                }}
              >
                Nous avons bien reçu votre demande de devis. Notre équipe
                l'étudiera dans les plus brefs délais.
              </p>
            </td>
          </tr>

          {/* Quote Number Box */}
          <tr>
            <td style={{ padding: "0 32px 24px" }}>
              <table
                role="presentation"
                style={{
                  width: "100%",
                  backgroundColor: "#f0f9ff",
                  borderRadius: "12px",
                  border: "1px solid #bae6fd",
                }}
              >
                <tr>
                  <td style={{ padding: "20px", textAlign: "center" }}>
                    <p
                      style={{
                        color: "#64748b",
                        margin: "0 0 4px 0",
                        fontSize: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      Numéro de devis
                    </p>
                    <p
                      style={{
                        color: "#0891b2",
                        margin: 0,
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      {quoteNumber}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          {/* Configuration Summary */}
          <tr>
            <td style={{ padding: "0 32px 24px" }}>
              <h3
                style={{
                  color: "#1a365d",
                  margin: "0 0 16px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Récapitulatif de votre configuration
              </h3>
              <table
                role="presentation"
                style={{
                  width: "100%",
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                }}
              >
                <tr>
                  <td
                    style={{
                      padding: "12px 16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Produit
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      borderBottom: "1px solid #e2e8f0",
                      textAlign: "right",
                    }}
                  >
                    <span
                      style={{
                        color: "#1e293b",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {productFamily} - {productStyle}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "12px 16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Dimensions
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      borderBottom: "1px solid #e2e8f0",
                      textAlign: "right",
                    }}
                  >
                    <span
                      style={{
                        color: "#1e293b",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {dimensions.width} × {dimensions.height} cm
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 16px" }}>
                    <span
                      style={{
                        color: "#1e293b",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Prix estimé TTC
                    </span>
                  </td>
                  <td style={{ padding: "12px 16px", textAlign: "right" }}>
                    <span
                      style={{
                        color: "#0891b2",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      {totalTTC.toLocaleString("fr-FR")} €
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          {/* Next Steps */}
          <tr>
            <td style={{ padding: "0 32px 24px" }}>
              <h3
                style={{
                  color: "#1a365d",
                  margin: "0 0 16px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Prochaines étapes
              </h3>
              <table role="presentation" style={{ width: "100%" }}>
                {[
                  {
                    num: "1",
                    text: "Notre équipe technique analyse votre demande",
                  },
                  {
                    num: "2",
                    text: "Vous recevrez votre devis détaillé sous 24-48h",
                  },
                  {
                    num: "3",
                    text: "Un conseiller vous contactera pour affiner le projet",
                  },
                ].map((step, i) => (
                  <tr key={i}>
                    <td style={{ padding: "8px 0", verticalAlign: "top" }}>
                      <span
                        style={{
                          display: "inline-block",
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: "#1a365d",
                          color: "#ffffff",
                          textAlign: "center",
                          lineHeight: "24px",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        {step.num}
                      </span>
                    </td>
                    <td style={{ padding: "8px 0 8px 12px" }}>
                      <span style={{ color: "#4a5568", fontSize: "14px" }}>
                        {step.text}
                      </span>
                    </td>
                  </tr>
                ))}
              </table>
            </td>
          </tr>

          {/* Expiration Notice */}
          <tr>
            <td style={{ padding: "0 32px 24px" }}>
              <table
                role="presentation"
                style={{
                  width: "100%",
                  backgroundColor: "#fefce8",
                  borderRadius: "8px",
                  border: "1px solid #fef08a",
                }}
              >
                <tr>
                  <td style={{ padding: "16px" }}>
                    <p
                      style={{
                        color: "#854d0e",
                        margin: 0,
                        fontSize: "14px",
                      }}
                    >
                      ⏰ Ce devis sera valable jusqu'au{" "}
                      <strong>{dateExpiration}</strong>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          {/* CTA */}
          <tr>
            <td style={{ padding: "0 32px 32px", textAlign: "center" }}>
              <a
                href="https://zaconstruction.fr/compte/devis"
                style={{
                  display: "inline-block",
                  padding: "14px 32px",
                  backgroundColor: "#1a365d",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Suivre mon devis
              </a>
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td
              style={{
                backgroundColor: "#f8fafc",
                padding: "24px 32px",
                borderTop: "1px solid #e2e8f0",
              }}
            >
              <p
                style={{
                  color: "#64748b",
                  margin: "0 0 8px 0",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                Une question ? Contactez-nous :
              </p>
              <p
                style={{
                  color: "#1a365d",
                  margin: 0,
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                📞 01 23 45 67 89 | ✉️ contact@zaconstruction.fr
              </p>
            </td>
          </tr>

          {/* Legal */}
          <tr>
            <td style={{ padding: "16px 32px", textAlign: "center" }}>
              <p style={{ color: "#94a3b8", margin: 0, fontSize: "12px" }}>
                AZ Construction - 23 Chemin du Bac des Aubins, 95820
                Bruyères-sur-Oise
                <br />
                Cet email a été envoyé suite à votre demande de devis sur notre
                site.
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}

export default QuoteConfirmationEmail;



