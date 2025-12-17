/**
 * Template d'email de notification admin pour nouvelle demande de devis
 */

import * as React from "react";

interface QuoteNotificationEmailProps {
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

export function QuoteNotificationEmail({
  quoteNumber,
  customerName,
  customerEmail,
  customerPhone,
  customerType,
  companyName,
  productFamily,
  productStyle,
  dimensions,
  material,
  color,
  options,
  totalTTC,
  adresseChantier,
  typeProjet,
  delaiSouhaite,
  poseRequise,
  commentaire,
  dateDemanDe,
}: QuoteNotificationEmailProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nouvelle demande de devis</title>
      </head>
      <body
        style={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#f5f5f5",
          margin: 0,
          padding: "20px",
        }}
      >
        <table
          role="presentation"
          style={{
            width: "100%",
            maxWidth: "700px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Header */}
          <tr>
            <td
              style={{
                backgroundColor: "#0891b2",
                padding: "24px 32px",
              }}
            >
              <table role="presentation" style={{ width: "100%" }}>
                <tr>
                  <td>
                    <h1
                      style={{
                        color: "#ffffff",
                        margin: 0,
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      🔔 Nouvelle demande de devis
                    </h1>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#0891b2",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {quoteNumber}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          {/* Date */}
          <tr>
            <td style={{ padding: "20px 32px 0" }}>
              <p style={{ color: "#64748b", margin: 0, fontSize: "14px" }}>
                Reçue le {dateDemanDe}
              </p>
            </td>
          </tr>

          {/* Client Info */}
          <tr>
            <td style={{ padding: "20px 32px" }}>
              <h2
                style={{
                  color: "#1e293b",
                  margin: "0 0 16px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderBottom: "2px solid #e2e8f0",
                  paddingBottom: "8px",
                }}
              >
                👤 Informations client
              </h2>
              <table role="presentation" style={{ width: "100%" }}>
                <tr>
                  <td style={{ padding: "6px 0", width: "40%" }}>
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Nom
                    </span>
                  </td>
                  <td style={{ padding: "6px 0" }}>
                    <span
                      style={{
                        color: "#1e293b",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      {customerName}
                    </span>
                    <span
                      style={{
                        marginLeft: "8px",
                        backgroundColor:
                          customerType === "professionnel"
                            ? "#dbeafe"
                            : "#f0fdf4",
                        color:
                          customerType === "professionnel"
                            ? "#1d4ed8"
                            : "#166534",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      {customerType === "professionnel" ? "PRO" : "Particulier"}
                    </span>
                  </td>
                </tr>
                {companyName && (
                  <tr>
                    <td style={{ padding: "6px 0" }}>
                      <span style={{ color: "#64748b", fontSize: "14px" }}>
                        Entreprise
                      </span>
                    </td>
                    <td style={{ padding: "6px 0" }}>
                      <span
                        style={{
                          color: "#1e293b",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {companyName}
                      </span>
                    </td>
                  </tr>
                )}
                <tr>
                  <td style={{ padding: "6px 0" }}>
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Email
                    </span>
                  </td>
                  <td style={{ padding: "6px 0" }}>
                    <a
                      href={`mailto:${customerEmail}`}
                      style={{
                        color: "#0891b2",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      {customerEmail}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0" }}>
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Téléphone
                    </span>
                  </td>
                  <td style={{ padding: "6px 0" }}>
                    <a
                      href={`tel:${customerPhone}`}
                      style={{
                        color: "#0891b2",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      {customerPhone}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          {/* Product Config */}
          <tr>
            <td style={{ padding: "0 32px 20px" }}>
              <h2
                style={{
                  color: "#1e293b",
                  margin: "0 0 16px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderBottom: "2px solid #e2e8f0",
                  paddingBottom: "8px",
                }}
              >
                📦 Configuration produit
              </h2>
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
                      padding: "10px 16px",
                      borderBottom: "1px solid #e2e8f0",
                      width: "40%",
                    }}
                  >
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Produit
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "10px 16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <span
                      style={{
                        color: "#1e293b",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {productFamily} - {productStyle}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "10px 16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Dimensions
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "10px 16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <span style={{ color: "#1e293b", fontSize: "14px" }}>
                      {dimensions.width} × {dimensions.height} cm
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "10px 16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Matériau
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "10px 16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <span style={{ color: "#1e293b", fontSize: "14px" }}>
                      {material}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "10px 16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Couleur
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "10px 16px",
                      borderBottom: "1px solid #e2e8f0",
                    }}
                  >
                    <span style={{ color: "#1e293b", fontSize: "14px" }}>
                      {color}
                    </span>
                  </td>
                </tr>
                {options.length > 0 && (
                  <tr>
                    <td
                      style={{
                        padding: "10px 16px",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      <span style={{ color: "#64748b", fontSize: "14px" }}>
                        Options
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "10px 16px",
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      {options.map((opt, i) => (
                        <span
                          key={i}
                          style={{
                            display: "inline-block",
                            backgroundColor: "#e0f2fe",
                            color: "#0369a1",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            marginRight: "4px",
                            marginBottom: "4px",
                          }}
                        >
                          {opt}
                        </span>
                      ))}
                    </td>
                  </tr>
                )}
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
                  <td style={{ padding: "12px 16px" }}>
                    <span
                      style={{
                        color: "#0891b2",
                        fontSize: "20px",
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

          {/* Project Details */}
          <tr>
            <td style={{ padding: "0 32px 20px" }}>
              <h2
                style={{
                  color: "#1e293b",
                  margin: "0 0 16px 0",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderBottom: "2px solid #e2e8f0",
                  paddingBottom: "8px",
                }}
              >
                📍 Détails du projet
              </h2>
              <table role="presentation" style={{ width: "100%" }}>
                <tr>
                  <td style={{ padding: "6px 0", width: "40%" }}>
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Adresse chantier
                    </span>
                  </td>
                  <td style={{ padding: "6px 0" }}>
                    <span style={{ color: "#1e293b", fontSize: "14px" }}>
                      {adresseChantier.rue}, {adresseChantier.codePostal}{" "}
                      {adresseChantier.ville}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0" }}>
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Type de projet
                    </span>
                  </td>
                  <td style={{ padding: "6px 0" }}>
                    <span style={{ color: "#1e293b", fontSize: "14px" }}>
                      {typeProjet}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0" }}>
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Délai souhaité
                    </span>
                  </td>
                  <td style={{ padding: "6px 0" }}>
                    <span style={{ color: "#1e293b", fontSize: "14px" }}>
                      {delaiSouhaite}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "6px 0" }}>
                    <span style={{ color: "#64748b", fontSize: "14px" }}>
                      Pose demandée
                    </span>
                  </td>
                  <td style={{ padding: "6px 0" }}>
                    <span
                      style={{
                        backgroundColor: poseRequise ? "#dcfce7" : "#fee2e2",
                        color: poseRequise ? "#166534" : "#991b1b",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      {poseRequise ? "Oui" : "Non"}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          {/* Comment */}
          {commentaire && (
            <tr>
              <td style={{ padding: "0 32px 20px" }}>
                <h2
                  style={{
                    color: "#1e293b",
                    margin: "0 0 12px 0",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  💬 Commentaire du client
                </h2>
                <div
                  style={{
                    backgroundColor: "#fffbeb",
                    border: "1px solid #fef08a",
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <p
                    style={{
                      color: "#78350f",
                      margin: 0,
                      fontSize: "14px",
                      fontStyle: "italic",
                    }}
                  >
                    "{commentaire}"
                  </p>
                </div>
              </td>
            </tr>
          )}

          {/* CTA */}
          <tr>
            <td style={{ padding: "12px 32px 32px", textAlign: "center" }}>
              <a
                href={`https://zaconstruction.fr/admin/devis`}
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
                Voir dans l'admin →
              </a>
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td
              style={{
                backgroundColor: "#f1f5f9",
                padding: "16px 32px",
                textAlign: "center",
              }}
            >
              <p style={{ color: "#64748b", margin: 0, fontSize: "12px" }}>
                Cette notification a été générée automatiquement par le système
                AZ Construction.
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}

export default QuoteNotificationEmail;


