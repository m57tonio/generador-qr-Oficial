import type { QRGenerateRequest, QRGenerateResponse } from "../types";
import { API_ENDPOINTS } from "../constants";

/**
 * Servicio para generar códigos QR
 */
export class QRService {
  /**
   * Genera un código QR
   * @param data - Datos para generar el QR
   * @returns Promise con la respuesta del servidor
   */
  static async generateQR(data: QRGenerateRequest): Promise<QRGenerateResponse> {
    const response = await fetch(API_ENDPOINTS.GENERATE_QR, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Error al generar el código QR");
    }

    return result;
  }
}

