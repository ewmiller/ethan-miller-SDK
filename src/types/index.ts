export interface MoviesResponse {
  docs: Movie[];
}

export interface QuotesResponse {
  docs: Quote[];
}

export interface Movie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export interface Quote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}

export interface ConfigOptions {
  limit?: number;
  page?: number;
  offset?: number;
}