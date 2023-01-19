import axios, { AxiosInstance } from "axios";
import { LOTRMovies } from "./entities/movies";
import { LOTRQuotes } from "./entities/quotes";
import { ConfigOptions, MoviesResponse, QuotesResponse } from "./types";

export interface InstanceConfigOptions {
  apiToken?: string;
  requestTimeout?: number;
}
export class LOTR {
  public movies: LOTRMovies;
  public quotes: LOTRQuotes;

  constructor({ apiToken, requestTimeout }: InstanceConfigOptions) {
    const api = axios.create({
      baseURL: "https://the-one-api.dev/v2/movie",
      timeout: requestTimeout || 5000,
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    this.movies = new LOTRMovies(api);
    this.quotes = new LOTRQuotes(api);
  }
}
