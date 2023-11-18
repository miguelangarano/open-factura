import { signXml } from "./backend/services/signing";
import { generateInvoice } from "./backend/services/generateInvoice";

try {
  const xml = generateInvoice();
  Bun.write("invoice.xml", xml);
  // const signedXML = await signXml("sign.p12", "VielkaVvV0128", "factura.xml");
  // console.log(signedXML);
} catch (e) {
  console.error(e);
}
