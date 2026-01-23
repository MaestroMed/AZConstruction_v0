import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  pdf,
} from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a1628",
  },
  logoSubtitle: {
    fontSize: 10,
    color: "#666",
  },
  devisInfo: {
    textAlign: "right",
  },
  devisNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00d4ff",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1e3a5f",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    color: "#666",
  },
  value: {
    fontWeight: "bold",
  },
  table: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#0a1628",
    color: "white",
    padding: 8,
  },
  tableHeaderCell: {
    color: "white",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    padding: 8,
  },
  col1: { width: "40%" },
  col2: { width: "15%", textAlign: "center" },
  col3: { width: "15%", textAlign: "right" },
  col4: { width: "15%", textAlign: "right" },
  col5: { width: "15%", textAlign: "right" },
  totals: {
    marginTop: 20,
    alignItems: "flex-end",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginBottom: 5,
  },
  totalLabel: {
    color: "#666",
  },
  totalValue: {
    fontWeight: "bold",
  },
  grandTotal: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0a1628",
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: "#00d4ff",
  },
  footer: {
    position: "absolute",
    bottom: 40,
    left: 40,
    right: 40,
    textAlign: "center",
    color: "#666",
    fontSize: 8,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingTop: 10,
  },
  validity: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 5,
  },
  validityText: {
    fontSize: 9,
    color: "#666",
  },
});

interface QuoteItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
  configuration?: Record<string, string>;
}

interface QuoteData {
  numero: string;
  date: string;
  expirationDate: string;
  client: {
    nom: string;
    email: string;
    telephone?: string;
    adresse?: string;
  };
  items: QuoteItem[];
  subtotal: number;
  tva: number;
  total: number;
  notes?: string;
}

const QuoteDocument: React.FC<{ data: QuoteData }> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>AZ CONSTRUCTION</Text>
          <Text style={styles.logoSubtitle}>Métallerie sur mesure</Text>
          <Text style={{ marginTop: 10 }}>23 Chemin du Bac des Aubins</Text>
          <Text>95820 Bruyères-sur-Oise</Text>
          <Text>Tél: 09 71 35 74 96</Text>
          <Text>contact@azconstruction.fr</Text>
        </View>
        <View style={styles.devisInfo}>
          <Text style={styles.devisNumber}>DEVIS N°{data.numero}</Text>
          <Text style={{ marginTop: 5 }}>Date: {data.date}</Text>
          <Text>Validité: {data.expirationDate}</Text>
        </View>
      </View>

      {/* Client */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CLIENT</Text>
        <Text style={styles.value}>{data.client.nom}</Text>
        <Text>{data.client.email}</Text>
        {data.client.telephone && <Text>{data.client.telephone}</Text>}
        {data.client.adresse && <Text>{data.client.adresse}</Text>}
      </View>

      {/* Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DÉTAIL DU DEVIS</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, styles.col1]}>Description</Text>
            <Text style={[styles.tableHeaderCell, styles.col2]}>Qté</Text>
            <Text style={[styles.tableHeaderCell, styles.col3]}>P.U. HT</Text>
            <Text style={[styles.tableHeaderCell, styles.col5]}>Total HT</Text>
          </View>
          {data.items.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.col1}>
                <Text style={styles.value}>{item.description}</Text>
                {item.configuration && Object.entries(item.configuration).map(([key, value]) => (
                  <Text key={key} style={{ fontSize: 8, color: "#666" }}>
                    • {key}: {value}
                  </Text>
                ))}
              </View>
              <Text style={styles.col2}>{item.quantity}</Text>
              <Text style={styles.col3}>{item.unitPrice.toFixed(2)} €</Text>
              <Text style={styles.col5}>{item.total.toFixed(2)} €</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Totals */}
      <View style={styles.totals}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Sous-total HT</Text>
          <Text style={styles.totalValue}>{data.subtotal.toFixed(2)} €</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>TVA (20%)</Text>
          <Text style={styles.totalValue}>{data.tva.toFixed(2)} €</Text>
        </View>
        <View style={[styles.totalRow, styles.grandTotal]}>
          <Text>TOTAL TTC</Text>
          <Text>{data.total.toFixed(2)} €</Text>
        </View>
      </View>

      {/* Validity */}
      <View style={styles.validity}>
        <Text style={styles.validityText}>
          Ce devis est valable jusqu'au {data.expirationDate}. Passé cette date, les prix sont susceptibles d'être révisés.
        </Text>
        <Text style={[styles.validityText, { marginTop: 5 }]}>
          Conditions de paiement : 30% à la commande, 70% à la livraison.
        </Text>
        {data.notes && (
          <Text style={[styles.validityText, { marginTop: 5 }]}>
            Notes : {data.notes}
          </Text>
        )}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>AZ Construction SARL - SIRET: 123 456 789 00012 - TVA: FR12345678901</Text>
        <Text>RCS Pontoise - Capital: 50 000 €</Text>
      </View>
    </Page>
  </Document>
);

export async function generateQuotePDF(data: QuoteData): Promise<Buffer> {
  const pdfDoc = <QuoteDocument data={data} />;
  const pdfBuffer = await pdf(pdfDoc).toBuffer();
  return Buffer.from(pdfBuffer);
}

// Version client-side pour téléchargement direct depuis le navigateur
export interface DownloadQuoteData {
  config: {
    family: string;
    dimensions: { width: number; height: number; depth?: number };
    color: string;
    colorName: string;
    material: string;
    style: string;
    options: string[];
    price: number;
    date?: Date;
  };
  screenshotDataUrl?: string;
}

export async function downloadQuotePDF(data: DownloadQuoteData): Promise<void> {
  const { config, screenshotDataUrl } = data;
  // Utilise jspdf pour générer un PDF côté client
  const { jsPDF } = await import("jspdf");
  
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFontSize(24);
  doc.setTextColor(10, 22, 40);
  doc.text("AZ CONSTRUCTION", 20, 25);
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Métallerie sur mesure", 20, 32);
  doc.text("23 Chemin du Bac des Aubins, 95820 Bruyères-sur-Oise", 20, 38);
  doc.text("contact@azconstruction.fr | 09 71 35 74 96", 20, 44);
  
  // Ligne séparatrice
  doc.setDrawColor(0, 212, 255);
  doc.setLineWidth(0.5);
  doc.line(20, 50, pageWidth - 20, 50);
  
  // Titre
  doc.setFontSize(16);
  doc.setTextColor(30, 58, 95);
  doc.text("ESTIMATION DE PRIX", 20, 65);
  
  const today = (config.date || new Date()).toLocaleDateString("fr-FR");
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(`Date: ${today}`, pageWidth - 60, 65);
  
  // Produit
  const productName = config.family.charAt(0).toUpperCase() + config.family.slice(1).replace(/-/g, " ");
  doc.setFontSize(14);
  doc.setTextColor(10, 22, 40);
  doc.text(productName, 20, 80);
  
  // Screenshot si disponible
  let yPos = 95;
  if (screenshotDataUrl) {
    try {
      doc.addImage(screenshotDataUrl, "PNG", 20, yPos, 80, 60);
      yPos = 165;
    } catch {
      // Ignore image errors
    }
  }
  
  // Configuration
  doc.setFontSize(10);
  doc.setTextColor(60);
  
  doc.text(`• Dimensions: ${config.dimensions.width} × ${config.dimensions.height}${config.dimensions.depth ? ` × ${config.dimensions.depth}` : ""} cm`, 25, yPos);
  yPos += 7;
  doc.text(`• Couleur: ${config.colorName}`, 25, yPos);
  yPos += 7;
  doc.text(`• Matériau: ${config.material}`, 25, yPos);
  yPos += 7;
  doc.text(`• Style: ${config.style}`, 25, yPos);
  yPos += 7;
  
  if (config.options.length > 0) {
    doc.text(`• Options: ${config.options.join(", ")}`, 25, yPos);
    yPos += 7;
  }
  
  // Prix
  yPos += 15;
  doc.setDrawColor(200);
  doc.line(20, yPos, pageWidth - 20, yPos);
  yPos += 15;
  
  const subtotal = config.price;
  const tva = subtotal * 0.2;
  const total = subtotal + tva;
  
  doc.setFontSize(11);
  doc.setTextColor(100);
  doc.text(`Prix HT: ${subtotal.toFixed(2)} €`, pageWidth - 70, yPos);
  yPos += 8;
  doc.text(`TVA (20%): ${tva.toFixed(2)} €`, pageWidth - 70, yPos);
  yPos += 10;
  
  doc.setFontSize(14);
  doc.setTextColor(10, 22, 40);
  doc.text(`TOTAL TTC: ${total.toFixed(2)} €`, pageWidth - 70, yPos);
  
  // Footer
  yPos = 260;
  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text("Ce document est une estimation non contractuelle.", 20, yPos);
  doc.text("Pour un devis officiel, veuillez nous contacter.", 20, yPos + 5);
  doc.text("AZ Construction SARL - SIRET: 123 456 789 00012", 20, yPos + 12);
  
  // Télécharger
  const fileName = `estimation-${config.family}-${Date.now()}.pdf`;
  doc.save(fileName);
}

export { QuoteDocument };

