import soap from "soap";

export async function documentReception(stringXML: string): Promise<any> {
  const base64XML = Buffer.from(stringXML).toString("base64");
  let params = { xml: base64XML };

  let receptionResult: any;

  const receptionRequest = new Promise((resolve, reject) => {
    soap.createClient(
      process.env.SRI_RECEPTION_URL!,
      (err, client: soap.Client) => {
        if (err) {
          reject(err);
          return;
        }
        client.validarComprobante(params, (err: any, result: unknown) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      }
    );
  });

  receptionResult = await receptionRequest;
  return receptionResult;
}
