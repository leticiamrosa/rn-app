import {useState} from 'react';
import axios from 'axios';
import {IJoke, IGetJokesResult} from '../../Interface/Joke';

const baseApi = 'https://icanhazdadjoke.com';

interface IError {
  message: string;
  error: string;
  err?: Error | unknown;
}

export const useJokesHook = () => {
  const [jokes, setJokes] = useState<IJoke[]>([]);
  const [error, setError] = useState<IError>();
  const [loading, setLoading] = useState<boolean>(false);

  const getJokes = async () => {
    const url = `${baseApi}/search`;
    const headers = {Accept: 'application/json'};

    try {
      setLoading(true);
      const response = await axios.get(url, {headers});
      await getJokesSuccess(response);
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

  const getJokesSuccess = async (response: IGetJokesResult) => {
    const {results} = response.data;

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
