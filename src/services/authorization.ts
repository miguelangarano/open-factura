import { createClient, Client } from "soap";

export async function documentAuthorization(
  accesKey: string,
  authorizationUrl: string
) {
  let params = { claveAccesoComprobante: accesKey };

  let authorizationResponse: any;

  const authorizationRequest = new Promise((resolve, reject) => {
    createClient(authorizationUrl, (err: any, client: Client) => {
      client.autorizacionComprobante(params, (err: any, result: unknown) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  });

  authorizationResponse = await authorizationRequest;

  return authorizationResponse;
}
