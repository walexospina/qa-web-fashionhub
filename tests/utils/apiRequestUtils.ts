import { APIRequestContext } from "@playwright/test";

type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export async function executeRequest(
  apiContext: APIRequestContext,
  requestUrl: string,
  method: HttpMethod,
  requestOptions: object = {}
) {
  try {
    // Make the request using the specified HTTP method
    const response = await apiContext[method](requestUrl, requestOptions);

    if (!response.ok()) {
      const errorMessage = `
        Request failed with status ${response.status()}:
        URL: ${requestUrl}
        Method: ${method.toUpperCase()}
        Options: ${JSON.stringify(requestOptions)}
        Response: ${await response.text()}
      `;
      throw new Error(errorMessage);
    }

    return response;
  } catch (error) {
    throw new Error(
      `Request Error in 'executeRequest': ${error}\nRequest URL: ${requestUrl}\nMethod: ${method.toUpperCase()}`
    );
  }
}
