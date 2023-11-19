export type AdditionalDetail = {
  "@nombre": string;
  "@valor": string;
};

export type AdditionalDetails = {
  detAdicional: AdditionalDetail[];
};

export type Tax = {
  codigo: string;
  codigoPorcentaje: string;
  tarifa: string;
  baseImponible: string;
  valor: string;
};

export type Taxes = {
  impuesto: Tax[];
};

export type Detail = {
  codigoPrincipal: string;
  codigoAuxiliar: string;
  descripcion: string;
  unidadMedida?: string;
  cantidad: string;
  precioUnitario: string;
  precioSinSubsidio?: string;
  descuento: string;
  precioTotalSinImpuesto: string;
  detallesAdicionales?: AdditionalDetails;
  impuestos: Taxes;
};

export type Details = {
  detalle: Detail[];
};

const aditionalDetails: AdditionalDetails = {
  detAdicional: [
    {
      "@nombre": "nombre0",
      "@valor": "valor0",
    },
    {
      "@nombre": "nombre1",
      "@valor": "valor1",
    },
  ],
};

const taxes: Taxes = {
  impuesto: [
    {
      codigo: "2",
      codigoPorcentaje: "0",
      tarifa: "49.50",
      baseImponible: "50.00",
      valor: "50.00",
    },
    {
      codigo: "2",
      codigoPorcentaje: "0",
      tarifa: "49.50",
      baseImponible: "50.00",
      valor: "50.00",
    },
  ],
};

export const details: Details = {
  detalle: [
    {
      codigoPrincipal: "codigoPrincipal0",
      codigoAuxiliar: "codigoAuxiliar0",
      descripcion: "descripcion0",
      unidadMedida: "unidadMedida0",
      cantidad: "50.000000",
      precioUnitario: "50.000000",
      precioSinSubsidio: "50.000000",
      descuento: "50.00",
      precioTotalSinImpuesto: "50.00",
      detallesAdicionales: aditionalDetails,
      impuestos: taxes,
    },
    {
      codigoPrincipal: "codigoPrincipal1",
      codigoAuxiliar: "codigoAuxiliar1",
      descripcion: "descripcion1",
      unidadMedida: "unidadMedida1",
      cantidad: "50.000000",
      precioUnitario: "50.000000",
      precioSinSubsidio: "50.000000",
      descuento: "50.00",
      precioTotalSinImpuesto: "50.00",
      detallesAdicionales: aditionalDetails,
      impuestos: taxes,
    },
  ],
};
