import fs from "fs";
import forge from "node-forge";

function extractFromP12(p12Path, password) {
  const p12File = fs.readFileSync(p12Path, "binary");
  const p12Der = forge.util.decode64(p12File);
  const asn1 = forge.asn1.fromDer(p12Der);
  const p12 = forge.pkcs12.pkcs12FromAsn1(asn1, password);

  let key, cert;

  // Obtener la llave privada y el certificado
  for (const safeContents of p12.safeContents) {
    for (const safeBag of safeContents.safeBags) {
      if (safeBag.type === forge.pki.oids.keyBag) {
        key = forge.pki.privateKeyToPem(safeBag.key);
      } else if (safeBag.type === forge.pki.oids.certBag) {
        cert = forge.pki.certificateToPem(safeBag.cert);
      }
    }
  }

  return { key, cert };
}

// Ejemplo de uso
const p12Path = "sign.p12";
const password = "VielkaVvV0128";
const { key, cert } = extractFromP12(p12Path, password);

console.log("Llave privada:", key);
console.log("Certificado:", cert);
