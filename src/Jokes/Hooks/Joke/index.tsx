import {useState} from 'react';
import {makeApiUrl, makeAxiosHttpClient} from '@main/Factories/Http';
import {IJoke} from '../../Interface/Joke';
import {JokeService} from '@jokes/Services/';

interface IError {
  message: string;
  error: string;
  err?: Error | unknown;
}

export const useJokesHook = () => {
  const [jokes, setJokes] = useState<IJoke[] | undefined>([]);
  const [error, setError] = useState<IError>();
  const [loading, setLoading] = useState<boolean>(false);

  const getJokes = async () => {
    const path = 'search';
    const jokeService = new JokeService(
      makeApiUrl(path),
      makeAxiosHttpClient(),
    );

    try {
      setLoading(true);
      const response = await jokeService.getJokes();
      const results = response?.body?.results;

      await getJokesSuccess(results);
    } catch (err) {
      setError({
        message: 'Empty Jokes',
        error: 'Empty Jokes',
        err,
      });
    } finally {
      setLoading(false);
    }
  };

  const getJokesSuccess = async (results: IJoke[] | undefined) => {
    if (!results || results.length === 0) {
      setError({
        message: 'Empty Jokes',
        error: 'Empty Jokes',
      });
    }

    setJokes(results);
  };

  return {
    getJokes,
    jokes,
    error,
    loading,
  };
};
