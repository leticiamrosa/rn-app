import {
  HttpResponse,
  HttpPostClient,
  HttpGetParams,
} from '@infra/http/protocols';
import axios, {AxiosResponse} from 'axios';

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async get(params: HttpGetParams<any>): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>;
    const headers = {Accept: 'application/json'};

    try {
      httpResponse = await axios.get(params.url, {headers});
    } catch (error) {
      httpResponse = error.message;
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
