import axios from 'axios';
import {faker} from '@faker-js/faker';

export const mockHttpResponse = (): any => {
  const dataMock = {
    id: faker.datatype.uuid(),
    image: faker.image.cats(),
    jokes: faker.datatype.array(),
  };

  return {
    data: dataMock,
    status: faker.datatype.number(),
  };
};

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  mockedAxios.get.mockResolvedValue(mockHttpResponse());

  return mockedAxios;
};
