import { create } from "xmlbuilder2";
import { Invoice, InvoiceInput } from "../baseData/invoice/invoice";

export function generateInvoiceXml(invoice: Invoice) {
  const document = create(invoice);
  const xml = document.end({ prettyPrint: true });
  return xml;
}

export function generateInvoice(invoiceData: InvoiceInput) {
  // Extraemos el código de acceso desde infoTributaria
  const accessKey = invoiceData.infoTributaria.claveAcceso;

  const invoice: Invoice = {
    factura: {
      "@xmlns:ds": "http://www.w3.org/2000/09/xmldsig#",
      "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "@id": "comprobante",
      "@version": "1.0.0",
      infoTributaria: invoiceData.infoTributaria, // Se usa tal cual viene
      infoFactura: invoiceData.infoFactura,
      detalles: invoiceData.detalles,
    },
  };

  return { invoice, accessKey }; // Retornamos la factura y el accessKey
}
