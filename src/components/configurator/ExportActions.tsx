"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Share2, Camera, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { downloadQuotePDF } from "@/lib/pdf/generateQuotePDF";
import type { ExportConfig, ProductFamilyConfig } from "@/types/configurator";

interface ExportActionsProps {
  config: ExportConfig;
  familyConfig: ProductFamilyConfig;
  canvasRef?: React.RefObject<HTMLCanvasElement>;
  className?: string;
}

type ExportStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Actions d'export : image, PDF, partage.
 */
export function ExportActions({
  config,
  familyConfig,
  canvasRef,
  className = "",
}: ExportActionsProps) {
  const [pdfStatus, setPdfStatus] = React.useState<ExportStatus>('idle');
  const [imageStatus, setImageStatus] = React.useState<ExportStatus>('idle');
  const [shareStatus, setShareStatus] = React.useState<ExportStatus>('idle');

  // Capture du canvas 3D
  const captureCanvas = React.useCallback(async (): Promise<string | null> => {
    // Chercher le canvas Three.js dans le DOM
    const canvas = canvasRef?.current || document.querySelector('canvas');
    if (!canvas) return null;

    try {
      return canvas.toDataURL('image/png');
    } catch (e) {
      console.error('Failed to capture canvas:', e);
      return null;
    }
  }, [canvasRef]);

  // Export PDF
  const handleExportPDF = async () => {
    setPdfStatus('loading');

    try {
      const screenshot = await captureCanvas();

      await downloadQuotePDF({
        config: {
          ...config,
          date: new Date(),
        },
        screenshotDataUrl: screenshot || undefined,
      });

      setPdfStatus('success');
      setTimeout(() => setPdfStatus('idle'), 2000);
    } catch (e) {
      console.error('PDF export failed:', e);
      setPdfStatus('error');
      setTimeout(() => setPdfStatus('idle'), 2000);
    }
  };

  // Export Image
  const handleExportImage = async () => {
    setImageStatus('loading');

    try {
      const screenshot = await captureCanvas();
      if (!screenshot) throw new Error('No canvas found');

      // Télécharger l'image
      const link = document.createElement('a');
      link.href = screenshot;
      link.download = `configuration-${config.family}-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setImageStatus('success');
      setTimeout(() => setImageStatus('idle'), 2000);
    } catch (e) {
      console.error('Image export failed:', e);
      setImageStatus('error');
      setTimeout(() => setImageStatus('idle'), 2000);
    }
  };

  // Partage
  const handleShare = async () => {
    setShareStatus('loading');

    try {
      // Créer une URL de partage (simulation)
      const shareData = {
        title: `Ma configuration ${familyConfig.nameSingular} - AZ Construction`,
        text: `J'ai configuré un ${familyConfig.nameSingular} de ${config.dimensions.width}×${config.dimensions.height}cm en ${config.colorName} pour ${config.price}€`,
        url: window.location.href,
      };

      if (navigator.share && navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
        setShareStatus('success');
      } else {
        // Fallback: copier le lien
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus('success');
      }

      setTimeout(() => setShareStatus('idle'), 2000);
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        console.error('Share failed:', e);
        setShareStatus('error');
      }
      setTimeout(() => setShareStatus('idle'), 2000);
    }
  };

  const getButtonContent = (
    status: ExportStatus,
    icon: React.ReactNode,
    label: string
  ) => {
    switch (status) {
      case 'loading':
        return (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Chargement...</span>
          </>
        );
      case 'success':
        return (
          <>
            <Check className="w-4 h-4 text-green-500" />
            <span>Terminé !</span>
          </>
        );
      case 'error':
        return (
          <>
            <span className="text-red-500">Erreur</span>
          </>
        );
      default:
        return (
          <>
            {icon}
            <span>{label}</span>
          </>
        );
    }
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {/* Export PDF */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          variant="outline"
          onClick={handleExportPDF}
          disabled={pdfStatus === 'loading'}
          className="flex items-center gap-2"
        >
          {getButtonContent(pdfStatus, <FileText className="w-4 h-4" />, 'Devis PDF')}
        </Button>
      </motion.div>

      {/* Export Image */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          variant="outline"
          onClick={handleExportImage}
          disabled={imageStatus === 'loading'}
          className="flex items-center gap-2"
        >
          {getButtonContent(imageStatus, <Camera className="w-4 h-4" />, 'Image')}
        </Button>
      </motion.div>

      {/* Partage */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          variant="outline"
          onClick={handleShare}
          disabled={shareStatus === 'loading'}
          className="flex items-center gap-2"
        >
          {getButtonContent(shareStatus, <Share2 className="w-4 h-4" />, 'Partager')}
        </Button>
      </motion.div>
    </div>
  );
}

export default ExportActions;






