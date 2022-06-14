import {
  HttpResponse,
  HttpGetParams,
  HttpGetClient,
  HttpResponseError,
} from '@infra/http/protocols';
import axios, {AxiosError, AxiosResponse} from 'axios';

export class AxiosHttpClient implements HttpGetClient<any, any> {
  async get(
    params: HttpGetParams<any>,
  ): Promise<HttpResponse<any> | HttpResponseError<any>> {
    let httpResponse: AxiosResponse<any>;

    const headers = {
      Accept: 'application/json',
    };

    try {
      httpResponse = await axios.get(params.url, {headers});
    } catch (error: any) {
      const err = error as AxiosError;
      return {
        statusCode: Number(err.status) || 500,
        error: err.message,
      };
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
