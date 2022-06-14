import {HttpGetParams} from '@infra/http/protocols';
import {faker} from '@faker-js/faker';

export const mockGetRequest = (): HttpGetParams<any> => ({
  url: faker.internet.url(),
});

export const mockGetHeader = () => ({headers: {Accept: 'application/json'}});
