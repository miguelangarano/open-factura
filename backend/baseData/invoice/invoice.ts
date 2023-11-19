import { AdditionalInfo, additionalInfo } from "./additionalInfo";
import { Details, details } from "./details";
import { InvoiceInfo, invoiceInfo } from "./invoiceInfo";
import {
  OtherThirdPartyValues,
  otherThirdPartyValues,
} from "./otherThirdPartyValues";
import { Reimbursements, reimbursements } from "./reimbursements";
import {
  RemisionGuideSustitutiveInfo,
  remisionGuideSustitutiveInfo,
} from "./remissionGuidesSustitutiveInfo";
import { Retentions, retentions } from "./retentions";
import { TaxInfo, taxInfo } from "./taxInfo";

export type Invoice = {
  factura: {
    "@xmlns:ds": string;
    "@xmlns:xsi": string;
    "@id": string;
    "@version": string;
    infoTributaria: TaxInfo;
    infoFactura: InvoiceInfo;
    detalles: Details;
    reembolsos?: Reimbursements;
    retenciones?: Retentions;
    infoSustitutivaGuiaRemision?: RemisionGuideSustitutiveInfo;
    otrosRubrosTerceros?: OtherThirdPartyValues;
    tipoNegociable?: {
      correo: string;
    };
    maquinaFiscal?: {
      marca: string;
      modelo: string;
      serie: string;
    };
    infoAdicional?: AdditionalInfo;
  };
};

export const invoice = {
  factura: {
    "@xmlns:ds": "http://www.w3.org/2000/09/xmldsig#",
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "@id": "comprobante",
    "@version": "version0",
    infoTributaria: taxInfo,
    infoFactura: invoiceInfo,
    detalles: details,
    reembolsos: reimbursements,
    retenciones: retentions,
    infoSustitutivaGuiaRemision: remisionGuideSustitutiveInfo,
    otrosRubrosTerceros: otherThirdPartyValues,
    tipoNegociable: {
      correo: "correo0",
    },
    maquinaFiscal: {
      marca: "marca0",
      modelo: "modelo0",
      serie: "serie0",
    },
    infoAdicional: additionalInfo,
  },
};
