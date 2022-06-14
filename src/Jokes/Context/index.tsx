import {createContainer} from 'unstated-next';
import {useJokesHook} from '../Hooks/Joke';

const useJokesContext = () => {
  const {getJokes, jokes, loading} = useJokesHook();

  return {
    getJokes,
    jokes,
    loading,
  };
};

export const JokesContext = createContainer(useJokesContext);
