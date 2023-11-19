import { create } from "xmlbuilder2";
import { invoice } from "../baseData/invoice/invoice";

export function generateInvoiceXml() {
  const document = create(invoice);
  const xml = document.end({ prettyPrint: true });
  return xml;
}

export function generateInvoice() {
  
}
