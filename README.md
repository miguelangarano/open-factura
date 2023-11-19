# open-factura

Open Factura es un proyecto opensource de facturación electrónica para Ecuador compatible con la ficha técnica para comprobantes electrónicos emitido por el SRI.

Está publicada como [librería en npm](https://www.npmjs.com/package/open-factura) y la puedes utilizar simplemente instalandola como dependencia en tu proyecto de Node o Bun.

### Funciones

La librería cuenta actualmente con las siguientes funciones:

- Tipado de campos para factura electrónica de acuerdo a las especificaciones del SRI.
- Generación de archivo JSON con formato de factura electrónica.
- Generación de XML con formato de factura electrónica.
- Firmado de XML con archivo .p12 (Compatible con Security Data y Banco Central)
- Envío de documento a endpoint de recepción del SRI
- Autorización de documento en endpoint del SRI
- Cargar Firma electrónica desde archivo local o URL
- Cargar XML desde archivo local o URL

### Ejemplo

Aquí puedes ver un ejemplo de cómo utilizar las funciones principales:

```
import { generateInvoice, generateInvoiceXml, signXml } from "open-factura";

const invoice = generateInvoice({
  infoTributaria: {
    ...
  },
  infoFactura: {
    ...
  },
  detalles: {
    ...
  },
  reembolsos: {
    ...
  },
  retenciones: {
    ...
  },
  infoSustitutivaGuiaRemision: {
    ...
  },
  otrosRubrosTerceros: {
    ...
  },
  tipoNegociable: { correo: "correo0" },
  maquinaFiscal: {
    ...
  },
  infoAdicional: {
    ...
  },
});

const invoiceXml = generateInvoiceXml(invoice);

const sign: ArrayBuffer = new ArrayBuffer(16);
const password = "pass";

const signedInvoice = await signXml(sign, password, invoiceXml);
```

Un ejemplo completo lo puedes encontrar en la carpeta `tests`
Ejemplos de los archivos generados los encuentras en `src/example`

### Endpoints del SRI

El SRI ha habilitado dos endpoints para cada ambiente (pruebas, producción).

**Producción**

```
SRI_RECEPTION_URL="https://cel.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl"
SRI_AUTHORIZATION_URL="https://cel.sri.gob.ec/comprobantes-electronicos-ws/AutorizacionComprobantesOffline?wsdl"
```

**Pruebas**

```
SRI_RECEPTION_URL="https://celcer.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl"
SRI_AUTHORIZATION_URL="https://celcer.sri.gob.ec/comprobantes-electronicos-ws/AutorizacionComprobantesOffline?wsdl"
```

**Ten en cuenta que para poder utilizar estos endpoints con tu RUC debes activar el ambiente de pruebas/producción en tu cuenta del SRI. [Aquí un tutorial de cómo hacerlo](https://www.factureromovil.com/pasos-para-habilitar-el-ambiente-de-produccion-en-sri)**

### Contribuir

Si deseas contribuir a este proyecto puedes [comprarme un café](https://payp.page.link/SAvm) o Crea un Pull Request con los cambios que pienses que pueden aportar para que el proyecto siga creciendo.
