export type TaxInfo = {
  ambiente: string;
  tipoEmision: string;
  razonSocial: string;
  nombreComercial: string;
  ruc: string;
  claveAcceso: string;
  codDoc: string;
  estab: string;
  ptoEmi: string;
  secuencial: string;
  dirMatriz: string;
  agenteRetencion: string;
  contribuyenteRimpe?: string;
};

export const taxInfo: TaxInfo = {
  ambiente: "1",
  tipoEmision: "1",
  razonSocial: "razonSocial0",
  nombreComercial: "nombreComercial0",
  ruc: "0000000000001",
  claveAcceso: "0000000000000000000000000000000000000000000000000",
  codDoc: "00",
  estab: "000",
  ptoEmi: "000",
  secuencial: "000000000",
  dirMatriz: "dirMatriz0",
  agenteRetencion: "0",
  contribuyenteRimpe: "CONTRIBUYENTE RÉGIMEN RIMPE",
};
