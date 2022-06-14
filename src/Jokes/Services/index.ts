import {IGetJokesResult} from '../Interface/Joke';
import {HttpGetClient, HttpResponse} from '@infra/http/protocols';

interface IJokeService {
  getJokes: () => Promise<HttpResponse<IGetJokesResult> | never>;
}

export class JokeService implements IJokeService {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpGetClient<string, IGetJokesResult>,
  ) {}

  async getJokes(): Promise<HttpResponse<IGetJokesResult> | never> {
    const httpResponse = await this.httpPostClient.get({
      url: this.url,
    });

    const hasResponse =
      httpResponse && httpResponse.statusCode === 200 && httpResponse.body;

    if (!hasResponse) {
      throw new Error('Something Wrong!');
    }

    return httpResponse;
  }
}
