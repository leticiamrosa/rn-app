export const makeApiUrl = (path: string): string => {
  const baseApi = 'https://icanhazdadjoke.com';

  return `${baseApi}/${path}`;
};
