import { create } from "xmlbuilder2";
import { Invoice, InvoiceInput } from "../baseData/invoice/invoice";
import { generateAccessKey } from "../utils/utils"; // 1. Importar la función para generar la clave

export function generateInvoiceXml(invoice: Invoice) {
  const document = create(invoice);
  const xml = document.end({ prettyPrint: true });
  return xml;
}

export function generateInvoice(invoiceData: InvoiceInput) {
  // 2. Generar la clave de acceso dinámicamente
  const accessKey = generateAccessKey({
    date: invoiceData.infoFactura.fechaEmision,
    codDoc: invoiceData.infoTributaria.codDoc,
    ruc: invoiceData.infoTributaria.ruc,
    environment: invoiceData.infoTributaria.ambiente,
    establishment: invoiceData.infoTributaria.estab,
    emissionPoint: invoiceData.infoTributaria.ptoEmi,
    sequential: invoiceData.infoTributaria.secuencial,
  });

  // 3. Asignar la clave de acceso generada a los datos de la factura
  invoiceData.infoTributaria.claveAcceso = accessKey;

  const invoice: Invoice = {
    factura: {
      "@xmlns:ds": "http://www.w3.org/2000/09/xmldsig#",
      "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "@id": "comprobante",
      "@version": "1.0.0",
      infoTributaria: invoiceData.infoTributaria, // Ahora incluye la clave correcta
      infoFactura: invoiceData.infoFactura,
      detalles: invoiceData.detalles,
      infoAdicional: invoiceData.infoAdicional
    },
  };

  return { invoice, accessKey }; // Retornamos la factura completa y la clave de acceso
}
