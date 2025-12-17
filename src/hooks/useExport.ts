import * as React from 'react';
import html2canvas from 'html2canvas';
import { downloadQuotePDF } from '@/lib/pdf/generateQuotePDF';
import type { ExportConfig } from '@/types/configurator';

interface UseExportOptions {
  elementRef?: React.RefObject<HTMLElement>;
  config: ExportConfig | null;
}

/**
 * Hook pour gérer les exports (image, PDF, partage).
 */
export function useExport({ elementRef, config }: UseExportOptions) {
  const [isExporting, setIsExporting] = React.useState(false);
  const [exportError, setExportError] = React.useState<Error | null>(null);

  // Capture un élément en image
  const captureElement = React.useCallback(async (element?: HTMLElement): Promise<string | null> => {
    const targetElement = element || elementRef?.current;
    if (!targetElement) {
      // Fallback: chercher un canvas dans le DOM
      const canvas = document.querySelector('canvas') as HTMLCanvasElement;
      if (canvas) {
        try {
          return canvas.toDataURL('image/png');
        } catch (e) {
          console.error('Canvas capture failed:', e);
          return null;
        }
      }
      return null;
    }

    try {
      const canvas = await html2canvas(targetElement, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        logging: false,
      });
      return canvas.toDataURL('image/png');
    } catch (e) {
      console.error('html2canvas failed:', e);
      return null;
    }
  }, [elementRef]);

  // Export en image PNG
  const exportImage = React.useCallback(async (filename?: string) => {
    setIsExporting(true);
    setExportError(null);

    try {
      const dataUrl = await captureElement();
      if (!dataUrl) {
        throw new Error('Could not capture image');
      }

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = filename || `configuration-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return true;
    } catch (e) {
      setExportError(e as Error);
      return false;
    } finally {
      setIsExporting(false);
    }
  }, [captureElement]);

  // Export en PDF
  const exportPDF = React.useCallback(async () => {
    if (!config) {
      setExportError(new Error('No configuration provided'));
      return false;
    }

    setIsExporting(true);
    setExportError(null);

    try {
      const screenshot = await captureElement();

      await downloadQuotePDF({
        config,
        screenshotDataUrl: screenshot || undefined,
      });

      return true;
    } catch (e) {
      setExportError(e as Error);
      return false;
    } finally {
      setIsExporting(false);
    }
  }, [config, captureElement]);

  // Partage via Web Share API
  const share = React.useCallback(async (title?: string, text?: string) => {
    setIsExporting(true);
    setExportError(null);

    try {
      const shareData = {
        title: title || 'Ma configuration AZ Construction',
        text: text || 'Découvrez ma configuration personnalisée',
        url: window.location.href,
      };

      if (navigator.share && navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
        return true;
      }

      // Fallback: copier dans le presse-papier
      await navigator.clipboard.writeText(window.location.href);
      return true;
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        setExportError(e as Error);
      }
      return false;
    } finally {
      setIsExporting(false);
    }
  }, []);

  // Copier le lien dans le presse-papier
  const copyLink = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      return true;
    } catch (e) {
      setExportError(e as Error);
      return false;
    }
  }, []);

  return {
    isExporting,
    exportError,
    captureElement,
    exportImage,
    exportPDF,
    share,
    copyLink,
  };
}

export default useExport;

