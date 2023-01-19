import { AxiosInstance } from "axios";
import { APIRoute, ConfigOptions, MoviesResponse } from "../types";

export class LOTRMovies extends APIRoute {
  constructor(api: AxiosInstance){
    super(api);
  }

  async getAll(config: ConfigOptions = {}) {
    const result = await this.api.get("/", {
      params: { ...config },
    });
    return result.data as MoviesResponse;
  }
  
  async getOne(id: string, config: ConfigOptions = {}) {
    const result = await this.api.get(`/${id}`, {
      params: { ...config },
    });
    return result.data as MoviesResponse;
  }
}
