export type TaxDetail = {
  codigo: string;
  codigoPorcentaje: string;
  tarifa: string;
  baseImponibleReembolso: string;
  impuestoReembolso: string;
};

export type TaxDetails = {
  detalleImpuesto: TaxDetail[];
};

export type ReimbursementCompensation = {
  codigo: string;
  tarifa: string;
  valor: string;
};

export type ReimbursementCompensations = {
  compensacionesReembolso: ReimbursementCompensation[];
};

export type ReimbursementDetail = {
  tipoIdentificacionProveedorReembolso: string;
  identificacionProveedorReembolso: string;
  codPaisPagoProveedorReembolso: string;
  tipoProveedorReembolso: string;
  codDocReembolso: string;
  estabDocReembolso: string;
  ptoEmiDocReembolso: string;
  secuencialDocReembolso: string;
  fechaEmisionDocReembolso: string;
  numeroautorizacionDocReemb: string;
  detalleImpuestos: TaxDetails;
  compensacionesReembolso: ReimbursementCompensations;
};

export type Reimbursements = {
  reembolsoDetalle: ReimbursementDetail[];
};

const taxDetail: TaxDetail = {
  codigo: "2",
  codigoPorcentaje: "0",
  tarifa: "49.50",
  baseImponibleReembolso: "50.00",
  impuestoReembolso: "50.00",
};

const taxDetails: TaxDetails = {
  detalleImpuesto: [taxDetail, taxDetail],
};

const reimbursementCompensation: ReimbursementCompensation = {
  codigo: "1",
  tarifa: "49.50",
  valor: "50.00",
};

const reimbursementCompensations: ReimbursementCompensations = {
  compensacionesReembolso: [
    reimbursementCompensation,
    reimbursementCompensation,
  ],
};

export const reimbursements: Reimbursements = {
  reembolsoDetalle: [
    {
      tipoIdentificacionProveedorReembolso: "04",
      identificacionProveedorReembolso: "identificacionProveedorReembolso0",
      codPaisPagoProveedorReembolso: "000",
      tipoProveedorReembolso: "01",
      codDocReembolso: "00",
      estabDocReembolso: "000",
      ptoEmiDocReembolso: "000",
      secuencialDocReembolso: "0000000000",
      fechaEmisionDocReembolso: "01/01/2000",
      numeroautorizacionDocReemb: "0000000000",
      detalleImpuestos: taxDetails,
      compensacionesReembolso: reimbursementCompensations,
    },
    {
      tipoIdentificacionProveedorReembolso: "04",
      identificacionProveedorReembolso: "identificacionProveedorReembolso0",
      codPaisPagoProveedorReembolso: "000",
      tipoProveedorReembolso: "01",
      codDocReembolso: "00",
      estabDocReembolso: "000",
      ptoEmiDocReembolso: "000",
      secuencialDocReembolso: "0000000000",
      fechaEmisionDocReembolso: "01/01/2000",
      numeroautorizacionDocReemb: "0000000000",
      detalleImpuestos: taxDetails,
      compensacionesReembolso: reimbursementCompensations,
    },
  ],
};
