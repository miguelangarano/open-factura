import { signXml } from "./backend/services/signing";
import { generateInvoiceXml } from "./backend/services/generateInvoice";

try {
  const xml = generateInvoiceXml();
  Bun.write("invoice.xml", xml);
  // const signedXML = await signXml("sign.p12", "password", "factura.xml");
  // console.log(signedXML);
} catch (e) {
  console.error(e);
}
