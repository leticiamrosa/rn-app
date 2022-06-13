import {createContainer} from 'unstated-next';
import {useJokesHook} from '../Hooks/Joke';

const useJokesContext = () => {
  const {getJokes, jokes} = useJokesHook();

  return {
    getJokes,
    jokes,
  };
};

export const JokesContext = createContainer(useJokesContext);
