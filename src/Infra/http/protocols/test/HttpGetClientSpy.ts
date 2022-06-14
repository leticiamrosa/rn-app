import {
  HttpGetClient,
  HttpResponse,
  HttpStatusCode,
  HttpGetParams,
} from '@infra/http/protocols';

export class HttpGetClientSpy<T, R> implements HttpGetClient<T, R> {
  url?: string;
  body?: T;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async get(params: HttpGetParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url;
    return Promise.resolve(this.response);
  }
}
