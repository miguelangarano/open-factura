import { create } from "xmlbuilder2";
import { invoice } from "../baseData/invoice/invoice";

export function generateInvoice() {
  const document = create(invoice);
  const xml = document.end({ prettyPrint: true });
  return xml;
}
