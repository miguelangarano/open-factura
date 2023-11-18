import soap from "soap";

export async function documentAuthorization(accesKey: string, ruc: string) {
  let params = { claveAccesoComprobante: accesKey };

  let authorizationResponse: any;

  const authorizationRequest = new Promise((resolve, reject) => {
    soap.createClient(
      process.env.SRI_AUTHORIZATION_URL!,
      (err: any, client: soap.Client) => {
        client.autorizacionComprobante(params, (err: any, result: unknown) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(result);
        });
      }
    );
  });

  authorizationResponse = await authorizationRequest;

  return authorizationResponse;
}
