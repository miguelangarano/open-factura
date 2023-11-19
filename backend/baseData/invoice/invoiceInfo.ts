export type InvoiceInfo = {
  fechaEmision: string;
  dirEstablecimiento: string;
  contribuyenteEspecial?: string;
  obligadoContabilidad: "SI" | "NO";
  comercioExterior?: string;
  incoTermFactura?: string;
  lugarIncoTerm?: string;
  paisOrigen?: string;
  puertoEmbarque?: string;
  puertoDestino?: string;
  paisDestino?: string;
  paisAdquisicion?: string;
  /*
  RUC 04
  CÉDULA 05
  PASAPORTE 06
  VENTA A CONSUMIDOR FINAL* 07
  IDENTIFICACIÓN DELEXTERIOR* 08
  */
  tipoIdentificacionComprador: "04" | "05" | "06" | "07" | "08";
  guiaRemision?: string;
  razonSocialComprador: string;
  identificacionComprador: string;
  direccionComprador: string;
  totalSinImpuestos: string;
  totalSubsidio?: string;
  incoTermTotalSinImpuestos?: string;
  totalDescuento: string;
  codDocReembolso?: string;
  totalComprobantesReembolso?: string;
  totalBaseImponibleReembolso?: string;
  totalImpuestoReembolso?: string;
  totalConImpuestos: TotalWithTaxes;
  compensaciones?: Compensations;
  propina?: string;
  fleteInternacional?: string;
  seguroInternacional?: string;
  gastosAduaneros?: string;
  gastosTransporteOtros?: string;
  importeTotal: string;
  moneda: string;
  placa?: string;
  pagos: Payments;
  valorRetIva?: string;
  valorRetRenta?: string;
};

export type TotalWithTax = {
  /*
  IVA 2
  ICE 3
  IRBPNR 5
  */
  codigo: "2" | "3" | "5";
  /*
  IVA
  0% 0
  12% 2
  14% 3
  No Objeto de Impuesto 6
  Exento de IVA 7
  IVA diferenciado4 8

  ICE - Ver tabla 18 de la ficha tecnica de comprobantes electronicos
  */
  codigoPorcentaje: "0" | "2" | "3" | "6" | "7" | "8";
  descuentoAdicional: string;
  baseImponible: string;
  tarifa?: string;
  valor: string;
  valorDevolucionIva?: string;
};

export type TotalWithTaxes = {
  totalImpuesto: TotalWithTax[];
};

export type Compensation = {
  codigo: string;
  tarifa: string;
  valor: string;
};

export type Compensations = {
  compensacion: Compensation[];
};

export type Payment = {
  formaPago: string;
  total: string;
  plazo: string;
  unidadTiempo: string;
};

export type Payments = {
  pago: Payment[];
};

const totalWithTaxes: TotalWithTaxes = {
  totalImpuesto: [
    {
      codigo: "2",
      codigoPorcentaje: "0",
      descuentoAdicional: "0.00",
      baseImponible: "50.00",
      tarifa: "49.50",
      valor: "50.00",
      valorDevolucionIva: "50.00",
    },
    {
      codigo: "2",
      codigoPorcentaje: "0",
      descuentoAdicional: "0.00",
      baseImponible: "50.00",
      tarifa: "49.50",
      valor: "50.00",
      valorDevolucionIva: "50.00",
    },
  ],
};

const compensations: Compensations = {
  compensacion: [
    {
      codigo: "1",
      tarifa: "49.50",
      valor: "50.00",
    },
    {
      codigo: "1",
      tarifa: "49.50",
      valor: "50.00",
    },
  ],
};

const payments: Payments = {
  pago: [
    {
      formaPago: "01",
      total: "50.00",
      plazo: "50.00",
      unidadTiempo: "unidadTiempo",
    },
    {
      formaPago: "01",
      total: "50.00",
      plazo: "50.00",
      unidadTiempo: "unidadTiempo",
    },
  ],
};

export const invoiceInfo: InvoiceInfo = {
  fechaEmision: "01/01/2000",
  dirEstablecimiento: "dirEstablecimiento0",
  contribuyenteEspecial: "contribuyente",
  obligadoContabilidad: "SI",
  comercioExterior: "EXPORTADOR",
  incoTermFactura: "A",
  lugarIncoTerm: "lugarIncoTerm0",
  paisOrigen: "000",
  puertoEmbarque: "puertoEmbarque0",
  puertoDestino: "puertoDestino0",
  paisDestino: "000",
  paisAdquisicion: "000",
  tipoIdentificacionComprador: "04",
  guiaRemision: "000-000-000000000",
  razonSocialComprador: "razonSocialComprador0",
  identificacionComprador: "identificacionComprador0",
  direccionComprador: "direccionComprador0",
  totalSinImpuestos: "50.00",
  totalSubsidio: "50.00",
  incoTermTotalSinImpuestos: "A",
  totalDescuento: "0.00",
  codDocReembolso: "00",
  totalComprobantesReembolso: "50.00",
  totalBaseImponibleReembolso: "50.00",
  totalImpuestoReembolso: "50.00",
  totalConImpuestos: totalWithTaxes,
  compensaciones: compensations,
  propina: "50.00",
  fleteInternacional: "50.00",
  seguroInternacional: "50.00",
  gastosAduaneros: "50.00",
  gastosTransporteOtros: "50.00",
  importeTotal: "50.00",
  moneda: "moneda0",
  placa: "placa0",
  pagos: payments,
  valorRetIva: "50.00",
  valorRetRenta: "50.00",
};
