export type Retention = {
  codigo: string;
  codigoPorcentaje: string;
  tarifa: string;
  valor: string;
};

export type Retentions = {
  retencion: Retention[];
};

const retention = {
  codigo: "4",
  codigoPorcentaje: "0",
  tarifa: "49.50",
  valor: "50.00",
};

export const retentions = {
  retencion: [retention, retention],
};
