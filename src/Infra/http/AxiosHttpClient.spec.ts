import {AxiosHttpClient} from '@infra/http/AxiosHttpClient';
import {
  mockAxios,
  mockHttpResponse,
  mockGetRequest,
  mockGetHeader,
} from '@infra/http/protocols/test';
import axios from 'axios';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();

  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpClient', () => {
  test('should call axios with correct values', async () => {
    // given
    const request = mockGetRequest();
    const header = mockGetHeader();
    const {sut, mockedAxios} = makeSut();

    // when
    await sut.get(request);

    // then
    expect(mockedAxios.get).toHaveBeenCalledWith(request.url, header);
  });

  test('should return the correct statusCode and body', () => {
    // given
    const request = mockGetRequest();
    const {sut, mockedAxios} = makeSut();

    // when
    const promise = sut.get(request);

    // then
    expect(promise).toEqual(mockedAxios.get.mock.results[0].value);
  });

  test('should return the correct statusCode and body on failure', () => {
    // given
    const request = mockGetRequest();
    const {sut, mockedAxios} = makeSut();
    mockedAxios.get.mockRejectedValueOnce({
      response: mockHttpResponse,
    });

    // when
    const promise = sut.get(request);

    // then
    expect(promise).toEqual(mockedAxios.get.mock.results[0].value);
  });
});
