import { useTranslation } from "react-i18next";
import { Code2 } from "lucide-react";
import type { UseQRGeneratorReturn } from "../../hooks/useQRGenerator";

interface QRDisplayProps {
  qrGenerator: UseQRGeneratorReturn;
}

export const QRDisplay = ({ qrGenerator }: QRDisplayProps) => {
  const { t } = useTranslation();
  const { qrCodeImage, selectedSize, handleDownloadQR } = qrGenerator;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 lg:p-6 rounded-lg shadow-md transition-colors">
      <div className="mb-4">
        <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
          {t("qr.title")}
        </h3>
      </div>
      {qrCodeImage ? (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center my-4">
            <img
              src={qrCodeImage}
              alt="Código QR"
              className="w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[250px] h-auto"
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {t("qr.size")}: <span className="font-semibold">{selectedSize} x {selectedSize} px</span>
          </p>
          <button
            onClick={handleDownloadQR}
            className="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm sm:text-base"
          >
            {t("qr.download")}
          </button>
        </div>
      ) : (
        <div className="text-center py-8 sm:py-12">
          <div className="mx-auto w-full max-w-[200px] h-[200px] border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700">
            <Code2 className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-3" />
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
              {t("qr.placeholder")}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {t("qr.placeholderText")}
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            {t("qr.instructions")}
          </p>
        </div>
      )}
    </div>
  );
};

