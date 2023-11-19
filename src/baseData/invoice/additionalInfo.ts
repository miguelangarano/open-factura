export type AdditionalField = {
  "@nombre": string;
  "#": string;
};

export type AdditionalInfo = {
  campoAdicional: AdditionalField[];
};

export const additionalInfo = {
  campoAdicional: [
    {
      "@nombre": "nombre4",
      "#": "campoAdicional0",
    },
    {
      "@nombre": "nombre5",
      "#": "campoAdicional1",
    },
  ],
};
