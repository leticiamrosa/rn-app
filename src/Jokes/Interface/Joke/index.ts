export interface IJoke {
  id: string;
  joke: string;
}

export interface IGetJokesResult {
  data: {
    current_page: number;
    limit: number;
    next_page: number;
    previous_page: number;
    results: IJoke[];
    search_term?: string;
  };
}
