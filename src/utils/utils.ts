export type GenerateAccessKey = {
  date: Date;
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
  ruc: string;
  environment: "1" | "2";
  establishment: string;
  emissionPoint: string;
  sequential: string;
};

export function generateAccessKey(accessKeyData: GenerateAccessKey) {
  let accessKey = "";
  accessKey += formatDateToDDMMYYYY(accessKeyData.date); // Fecha de emisión
  accessKey += accessKeyData.codDoc; // Tipo de comprobante
  accessKey += accessKeyData.ruc; // Número de RUC
  accessKey += accessKeyData.environment; // Tipo de ambiente
  accessKey += accessKeyData.establishment; // Establecimiento
  accessKey += accessKeyData.emissionPoint; // Punto de emision
  accessKey += accessKeyData.sequential; // Secuencial
  accessKey += generateRandomEightDigitNumber(); // Código numérico
  accessKey += "1"; // Tipo de emisión
  accessKey += generateVerificatorDigit(accessKey); // Dígito verificador
  return accessKey;
}

function formatDateToDDMMYYYY(date: Date) {
  let day = date.getDate();
  let month = date.getMonth() + 1; // getMonth() returns 0-11
  let year = date.getFullYear();

  // Pad day and month with a leading zero if they are less than 10
  const finalDay = day < 10 ? "0" + day : day;
  const finalMonth = month < 10 ? "0" + month : month;

  return `${finalDay}${finalMonth}${year}`;
}

function generateRandomEightDigitNumber(): number {
  const min = 10000000;
  const max = 99999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateVerificatorDigit(accessKey: string) {
  let result = 0;
  let addition = 0;
  let multiple = 7;
  for (let i = 0; i < accessKey.length; i++) {
    addition += parseInt(accessKey.charAt(i)) * multiple;
    multiple > 2 ? multiple-- : (multiple = 7);
  }
  result = 11 - (addition % 11);
  result === 10 ? (result = 1) : (result = result);
  result === 11 ? (result = 0) : (result = result);
  return result;
}
