export type ThirdPartyValue = {
  concepto: string;
  total: string;
};

export type OtherThirdPartyValues = {
  rubro: ThirdPartyValue[];
};

const value: ThirdPartyValue = {
  concepto: "concepto0",
  total: "50.00",
};

export const otherThirdPartyValues: OtherThirdPartyValues = {
  rubro: [value, value],
};
