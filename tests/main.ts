import {
  documentAuthorization,
  documentReception,
  generateInvoice,
  generateInvoiceXml,
  getP12FromUrl,
  signXml,
} from "open-factura";

const { invoice, accessKey } = generateInvoice({
  infoTributaria: {
    ambiente: "1",
    tipoEmision: "1",
    razonSocial: "razonSocial0",
    nombreComercial: "nombreComercial0",
    ruc: "0000000000001",
    codDoc: "01",
    estab: "000",
    ptoEmi: "000",
    secuencial: "000000000",
    dirMatriz: "dirMatriz0",
    agenteRetencion: "0",
    contribuyenteRimpe: "CONTRIBUYENTE RÉGIMEN RIMPE",
  },
  infoFactura: {
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
    totalConImpuestos: {
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
    },
    compensaciones: {
      compensacion: [
        { codigo: "1", tarifa: "49.50", valor: "50.00" },
        { codigo: "1", tarifa: "49.50", valor: "50.00" },
      ],
    },
    propina: "50.00",
    fleteInternacional: "50.00",
    seguroInternacional: "50.00",
    gastosAduaneros: "50.00",
    gastosTransporteOtros: "50.00",
    importeTotal: "50.00",
    moneda: "moneda0",
    placa: "placa0",
    pagos: {
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
    },
    valorRetIva: "50.00",
    valorRetRenta: "50.00",
  },
  detalles: {
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
        detallesAdicionales: {
          detAdicional: [
            { "@nombre": "nombre0", "@valor": "valor0" },
            { "@nombre": "nombre1", "@valor": "valor1" },
          ],
        },
        impuestos: {
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
        },
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
        detallesAdicionales: {
          detAdicional: [
            { "@nombre": "nombre0", "@valor": "valor0" },
            { "@nombre": "nombre1", "@valor": "valor1" },
          ],
        },
        impuestos: {
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
        },
      },
    ],
  },
  reembolsos: {
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
        detalleImpuestos: {
          detalleImpuesto: [
            {
              codigo: "2",
              codigoPorcentaje: "0",
              tarifa: "49.50",
              baseImponibleReembolso: "50.00",
              impuestoReembolso: "50.00",
            },
            {
              codigo: "2",
              codigoPorcentaje: "0",
              tarifa: "49.50",
              baseImponibleReembolso: "50.00",
              impuestoReembolso: "50.00",
            },
          ],
        },
        compensacionesReembolso: {
          compensacionesReembolso: [
            { codigo: "1", tarifa: "49.50", valor: "50.00" },
            { codigo: "1", tarifa: "49.50", valor: "50.00" },
          ],
        },
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
        detalleImpuestos: {
          detalleImpuesto: [
            {
              codigo: "2",
              codigoPorcentaje: "0",
              tarifa: "49.50",
              baseImponibleReembolso: "50.00",
              impuestoReembolso: "50.00",
            },
            {
              codigo: "2",
              codigoPorcentaje: "0",
              tarifa: "49.50",
              baseImponibleReembolso: "50.00",
              impuestoReembolso: "50.00",
            },
          ],
        },
        compensacionesReembolso: {
          compensacionesReembolso: [
            { codigo: "1", tarifa: "49.50", valor: "50.00" },
            { codigo: "1", tarifa: "49.50", valor: "50.00" },
          ],
        },
      },
    ],
  },
  retenciones: {
    retencion: [
      {
        codigo: "4",
        codigoPorcentaje: "0",
        tarifa: "49.50",
        valor: "50.00",
      },
      {
        codigo: "4",
        codigoPorcentaje: "0",
        tarifa: "49.50",
        valor: "50.00",
      },
    ],
  },
  infoSustitutivaGuiaRemision: {
    dirPartida: "dirPartida0",
    dirDestinatario: "dirDestinatario0",
    fechaIniTransporte: "01/01/2000",
    fechaFinTransporte: "01/01/2000",
    razonSocialTransportista: "razonSocialTransportista0",
    tipoIdentificacionTransportista: "04",
    rucTransportista: "rucTransportista0",
    placa: "placa1",
    destinos: {
      destino: [
        {
          motivoTraslado: "motivoTraslado0",
          docAduaneroUnico: "docAduaneroUnico0",
          codEstabDestino: "000",
          ruta: "ruta0",
        },
        {
          motivoTraslado: "motivoTraslado0",
          docAduaneroUnico: "docAduaneroUnico0",
          codEstabDestino: "000",
          ruta: "ruta0",
        },
      ],
    },
  },
  otrosRubrosTerceros: {
    rubro: [
      { concepto: "concepto0", total: "50.00" },
      { concepto: "concepto0", total: "50.00" },
    ],
  },
  tipoNegociable: { correo: "correo0" },
  maquinaFiscal: {
    marca: "marca0",
    modelo: "modelo0",
    serie: "serie0",
  },
  infoAdicional: {
    campoAdicional: [
      { "@nombre": "nombre4", "#": "campoAdicional0" },
      { "@nombre": "nombre5", "#": "campoAdicional1" },
    ],
  },
});

const invoiceXml = generateInvoiceXml(invoice);

const signature: ArrayBuffer = await getP12FromUrl("yoururl");
const password = "yourpassword";

const signedInvoice = await signXml(signature, password, invoiceXml);

const receptionResult = await documentReception(
  signedInvoice,
  process.env.SRI_RECEPTION_URL!
);

const authorizationResult = await documentAuthorization(
  accessKey,
  process.env.SRI_AUTHORIZATION_URL!
);

console.log(invoice);
console.log(invoiceXml);
console.log(signedInvoice);
console.log(receptionResult);
console.log(authorizationResult);
