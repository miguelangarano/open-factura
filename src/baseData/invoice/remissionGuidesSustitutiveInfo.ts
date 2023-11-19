export type Arrival = {
  motivoTraslado: string;
  docAduaneroUnico: string;
  codEstabDestino: string;
  ruta: string;
};

export type Arrivals = {
  destino: Arrival[];
};

export type RemisionGuideSustitutiveInfo = {
  dirPartida: string;
  dirDestinatario: string;
  fechaIniTransporte: string;
  fechaFinTransporte: string;
  razonSocialTransportista: string;
  tipoIdentificacionTransportista: string;
  rucTransportista: string;
  placa: string;
  destinos: Arrivals;
};

const arrival = {
  motivoTraslado: "motivoTraslado0",
  docAduaneroUnico: "docAduaneroUnico0",
  codEstabDestino: "000",
  ruta: "ruta0",
};

const arrivals = {
  destino: [arrival, arrival],
};

export const remisionGuideSustitutiveInfo = {
  dirPartida: "dirPartida0",
  dirDestinatario: "dirDestinatario0",
  fechaIniTransporte: "01/01/2000",
  fechaFinTransporte: "01/01/2000",
  razonSocialTransportista: "razonSocialTransportista0",
  tipoIdentificacionTransportista: "04",
  rucTransportista: "rucTransportista0",
  placa: "placa1",
  destinos: arrivals,
};
