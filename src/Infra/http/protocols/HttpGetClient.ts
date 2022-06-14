import {HttpResponse} from './HttpResponse';

export type HttpGetParams<T> = {
  url: string;
};

export interface HttpGetClient<T, R> {
  get: (params: HttpGetParams<T>) => Promise<HttpResponse<R>>;
}
