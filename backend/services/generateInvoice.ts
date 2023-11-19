import { create } from "xmlbuilder2";
import {
  RestaurantInvoice,
  RestaurantInvoiceInput,
} from "../baseData/restaurantInvoice/invoice";
import { generateAccessKey } from "../utils/utils";

export function generateInvoiceXml(invoice: RestaurantInvoice) {
  const document = create(invoice);
  const xml = document.end({ prettyPrint: true });
  return xml;
}

export function generateInvoice(invoiceData: RestaurantInvoiceInput) {
  const keyAccess = generateAccessKey({
    date: new Date(invoiceData.infoFactura.fechaEmision),
    codDoc: invoiceData.infoTributaria.codDoc,
    ruc: invoiceData.infoTributaria.ruc,
    environment: invoiceData.infoTributaria.ambiente,
    establishment: invoiceData.infoTributaria.estab,
    emissionPoint: invoiceData.infoTributaria.ptoEmi,
    sequential: invoiceData.infoTributaria.secuencial,
  });

  const invoice: RestaurantInvoice = {
    factura: {
      "@xmlns:ds": "http://www.w3.org/2000/09/xmldsig#",
      "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "@id": "comprobante",
      "@version": "1.0.0",
      infoTributaria: { ...invoiceData.infoTributaria, claveAcceso: keyAccess },
      infoFactura: invoiceData.infoFactura,
      detalles: invoiceData.detalles,
    },
  };

  return invoice;
}
