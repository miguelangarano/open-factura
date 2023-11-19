export type TaxInfo = {
  ambiente: "1" | "2";
  tipoEmision: string;
  razonSocial: string;
  nombreComercial: string;
  ruc: string;
  claveAcceso: string;
  /*
  FACTURA 01
  LIQUIDACIÓN DE COMPRA DE
  BIENES Y PRESTACIÓN DE
  SERVICIOS 03
  NOTA DE CRÉDITO 04
  NOTA DE DÉBITO 05
  GUÍA DE REMISIÓN 06
  COMPROBANTE DE RETENCIÓN 07
  */
  codDoc: "01" | "03" | "04" | "05" | "06" | "07";
  estab: string;
  ptoEmi: string;
  secuencial: string;
  dirMatriz: string;
  regimenMicroempresas?: "CONTRIBUYENTE RÉGIMEN MICROEMPRESAS";
  agenteRetencion?: string;
  contribuyenteRimpe?:
    | "CONTRIBUYENTE NEGOCIO POPULAR - RÉGIMEN RIMPE"
    | "CONTRIBUYENTE RÉGIMEN RIMPE";
};

export const taxInfo: TaxInfo = {
  ambiente: "1",
  tipoEmision: "1",
  razonSocial: "razonSocial0",
  nombreComercial: "nombreComercial0",
  ruc: "0000000000001",
  claveAcceso: "0000000000000000000000000000000000000000000000000",
  codDoc: "01",
  estab: "000",
  ptoEmi: "000",
  secuencial: "000000000",
  dirMatriz: "dirMatriz0",
  agenteRetencion: "0",
  contribuyenteRimpe: "CONTRIBUYENTE RÉGIMEN RIMPE",
};
