import jsPDF from 'jspdf';
import type { ExportConfig } from '@/types/configurator';

interface QuotePDFOptions {
  config: ExportConfig;
  screenshotDataUrl?: string;
  clientInfo?: {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
  };
}

/**
 * Génère un PDF de devis pour une configuration.
 */
export async function generateQuotePDF({
  config,
  screenshotDataUrl,
  clientInfo,
}: QuotePDFOptions): Promise<Blob> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let y = margin;

  // Couleurs
  const primaryColor: [number, number, number] = [26, 54, 93]; // Navy
  const accentColor: [number, number, number] = [0, 212, 255]; // Cyan
  const grayColor: [number, number, number] = [128, 128, 128];

  // === HEADER ===
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, pageWidth, 40, 'F');

  // Logo texte (à remplacer par un vrai logo)
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('AZ Construction', margin, 25);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Métallerie • Serrurerie • Thermolaquage', margin, 33);

  // Numéro de devis
  const reference = config.reference || `DEV-${Date.now().toString(36).toUpperCase()}`;
  doc.setFontSize(10);
  doc.text(`Devis N° ${reference}`, pageWidth - margin, 25, { align: 'right' });
  doc.text(`Date: ${config.date.toLocaleDateString('fr-FR')}`, pageWidth - margin, 33, { align: 'right' });

  y = 55;

  // === INFORMATIONS CLIENT ===
  if (clientInfo && (clientInfo.name || clientInfo.email)) {
    doc.setTextColor(...primaryColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Informations client', margin, y);
    y += 8;

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    if (clientInfo.name) {
      doc.text(`Nom: ${clientInfo.name}`, margin, y);
      y += 6;
    }
    if (clientInfo.email) {
      doc.text(`Email: ${clientInfo.email}`, margin, y);
      y += 6;
    }
    if (clientInfo.phone) {
      doc.text(`Téléphone: ${clientInfo.phone}`, margin, y);
      y += 6;
    }
    if (clientInfo.address) {
      doc.text(`Adresse: ${clientInfo.address}`, margin, y);
      y += 6;
    }

    y += 10;
  }

  // === IMAGE DU PRODUIT ===
  if (screenshotDataUrl) {
    const imgWidth = pageWidth - margin * 2;
    const imgHeight = 80;

    try {
      doc.addImage(screenshotDataUrl, 'PNG', margin, y, imgWidth, imgHeight);
      y += imgHeight + 10;
    } catch (e) {
      // Image non disponible
      doc.setFillColor(240, 240, 240);
      doc.rect(margin, y, imgWidth, imgHeight, 'F');
      doc.setTextColor(...grayColor);
      doc.setFontSize(10);
      doc.text('Aperçu du produit', pageWidth / 2, y + imgHeight / 2, { align: 'center' });
      y += imgHeight + 10;
    }
  }

  // === DÉTAILS DE LA CONFIGURATION ===
  doc.setTextColor(...primaryColor);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Détails de la configuration', margin, y);
  y += 10;

  // Tableau des spécifications
  const specs = [
    ['Famille de produit', config.family],
    ['Style', config.style],
    ['Dimensions', `${config.dimensions.width} × ${config.dimensions.height} cm`],
    ['Matériau', config.material],
    ['Couleur', `${config.colorName} (${config.color})`],
  ];

  doc.setFontSize(10);
  specs.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...grayColor);
    doc.text(label, margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(value, margin + 50, y);
    y += 7;
  });

  y += 5;

  // === OPTIONS ===
  if (config.options.length > 0) {
    doc.setTextColor(...primaryColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Options sélectionnées', margin, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);

    config.options.forEach((option) => {
      doc.text(`• ${option}`, margin + 5, y);
      y += 6;
    });

    y += 5;
  }

  // === PRIX ===
  doc.setFillColor(245, 245, 245);
  doc.rect(margin, y, pageWidth - margin * 2, 30, 'F');

  doc.setTextColor(...primaryColor);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Prix estimé TTC', margin + 5, y + 12);

  doc.setTextColor(...accentColor);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(`${config.price.toLocaleString('fr-FR')} €`, pageWidth - margin - 5, y + 18, { align: 'right' });

  doc.setTextColor(...grayColor);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('Hors pose et livraison', pageWidth - margin - 5, y + 26, { align: 'right' });

  y += 45;

  // === CONDITIONS ===
  doc.setTextColor(...grayColor);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');

  const conditions = [
    'Ce devis est valable 30 jours à compter de sa date d\'émission.',
    'Acompte de 30% à la commande, solde à la livraison.',
    'Délai de fabrication: 3 à 6 semaines selon le produit.',
    'Garantie: 10 ans sur le thermolaquage, 2 ans sur la motorisation.',
  ];

  conditions.forEach((condition) => {
    doc.text(`• ${condition}`, margin, y);
    y += 5;
  });

  // === FOOTER ===
  doc.setFillColor(...primaryColor);
  doc.rect(0, pageHeight - 25, pageWidth, 25, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.text('AZ Construction - Métallerie & Serrurerie', pageWidth / 2, pageHeight - 17, { align: 'center' });
  doc.text('Tél: 09 71 35 74 96 | Email: contact@azconstruction.fr | www.azconstruction.fr', pageWidth / 2, pageHeight - 10, { align: 'center' });

  // Retourner le PDF comme Blob
  return doc.output('blob');
}

/**
 * Télécharge le PDF du devis.
 */
export async function downloadQuotePDF(options: QuotePDFOptions): Promise<void> {
  const blob = await generateQuotePDF(options);
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `devis-az-construction-${Date.now()}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
}

export default generateQuotePDF;







