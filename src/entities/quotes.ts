import { AxiosInstance } from "axios";
import { APIRoute, ConfigOptions, QuotesResponse } from "../types";

export class LOTRQuotes extends APIRoute {
  constructor(api: AxiosInstance){
    super(api);
  }

  async getQuotesFromMovie(id: string, config: ConfigOptions = {}) {
    const requestString = `/${id}/quote`;
    const result = await this.api.get(`/${id}/quote`, {
      params: {
        ...config,
      },
    });
    return result.data as QuotesResponse;
  }
}
