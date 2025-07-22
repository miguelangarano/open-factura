declare function documentAuthorization(accesKey: string, authorizationUrl: string): Promise<any>;

type AdditionalField = {
    "@nombre": string;
    "#": string;
};
type AdditionalInfo = {
    campoAdicional: AdditionalField[];
};

type AdditionalDetail = {
    "@nombre": string;
    "@valor": string;
};
type AdditionalDetails = {
    detAdicional: AdditionalDetail[];
};
type Tax = {
    codigo: string;
    codigoPorcentaje: string;
    tarifa: string;
    baseImponible: string;
    valor: string;
};
type Taxes = {
    impuesto: Tax[];
};
type Detail = {
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
type Details = {
    detalle: Detail[];
};

type InvoiceInfo = {
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
type TotalWithTax = {
    codigo: "2" | "3" | "5";
    codigoPorcentaje: "0" | "2" | "3" | "6" | "7" | "8";
    descuentoAdicional: string;
    baseImponible: string;
    tarifa?: string;
    valor: string;
    valorDevolucionIva?: string;
};
type TotalWithTaxes = {
    totalImpuesto: TotalWithTax[];
};
type Compensation = {
    codigo: string;
    tarifa: string;
    valor: string;
};
type Compensations = {
    compensacion: Compensation[];
};
type Payment = {
    formaPago: string;
    total: string;
    plazo: string;
    unidadTiempo: string;
};
type Payments = {
    pago: Payment[];
};

type ThirdPartyValue = {
    concepto: string;
    total: string;
};
type OtherThirdPartyValues = {
    rubro: ThirdPartyValue[];
};

type TaxDetail = {
    codigo: string;
    codigoPorcentaje: string;
    tarifa: string;
    baseImponibleReembolso: string;
    impuestoReembolso: string;
};
type TaxDetails = {
    detalleImpuesto: TaxDetail[];
};
type ReimbursementCompensation = {
    codigo: string;
    tarifa: string;
    valor: string;
};
type ReimbursementCompensations = {
    compensacionesReembolso: ReimbursementCompensation[];
};
type ReimbursementDetail = {
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
type Reimbursements = {
    reembolsoDetalle: ReimbursementDetail[];
};

type Arrival = {
    motivoTraslado: string;
    docAduaneroUnico: string;
    codEstabDestino: string;
    ruta: string;
};
type Arrivals = {
    destino: Arrival[];
};
type RemisionGuideSustitutiveInfo = {
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

type Retention = {
    codigo: string;
    codigoPorcentaje: string;
    tarifa: string;
    valor: string;
};
type Retentions = {
    retencion: Retention[];
};

type TaxInfo = {
    ambiente: "1" | "2";
    tipoEmision: string;
    razonSocial: string;
    nombreComercial: string;
    ruc: string;
    claveAcceso: string;
    codDoc: "01" | "03" | "04" | "05" | "06" | "07";
    estab: string;
    ptoEmi: string;
    secuencial: string;
    dirMatriz: string;
    regimenMicroempresas?: "CONTRIBUYENTE RÉGIMEN MICROEMPRESAS";
    agenteRetencion?: string;
    contribuyenteRimpe?: "CONTRIBUYENTE NEGOCIO POPULAR - RÉGIMEN RIMPE" | "CONTRIBUYENTE RÉGIMEN RIMPE";
};

type Invoice = {
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
type InvoiceInput = {
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

declare function generateInvoiceXml(invoice: Invoice): string;
declare function generateInvoice(invoiceData: InvoiceInput): {
    invoice: Invoice;
    accessKey: string;
};

declare function documentReception(stringXML: string, receptionUrl: string): Promise<any>;

declare function getP12FromLocalFile(path: string): ArrayBuffer | SharedArrayBuffer;
declare function getP12FromUrl(url: string): Promise<ArrayBuffer>;
declare function getXMLFromLocalFile(path: string): string;
declare function getXMLFromLocalUrl(url: string): Promise<string>;
declare function signXml(p12Data: ArrayBuffer, p12Password: string, xmlData: string): Promise<string>;

export { type AdditionalDetail, type AdditionalDetails, type AdditionalField, type AdditionalInfo, type Arrival, type Arrivals, type Compensation, type Compensations, type Detail, type Details, type Invoice, type InvoiceInfo, type InvoiceInput, type OtherThirdPartyValues, type Payment, type Payments, type ReimbursementCompensation, type ReimbursementCompensations, type ReimbursementDetail, type Reimbursements, type RemisionGuideSustitutiveInfo, type Retention, type Retentions, type Tax, type TaxDetail, type TaxDetails, type TaxInfo, type Taxes, type ThirdPartyValue, type TotalWithTax, type TotalWithTaxes, documentAuthorization, documentReception, generateInvoice, generateInvoiceXml, getP12FromLocalFile, getP12FromUrl, getXMLFromLocalFile, getXMLFromLocalUrl, signXml };
