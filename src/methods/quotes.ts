import api from "../api";
import { ConfigOptions, QuotesResponse } from "../types";

async function getQuotesFromMovie(id: string, config: ConfigOptions = {}) {
  const requestString = `/${id}/quote`;
  const result = await api.get(`/${id}/quote`, {
    params: {
      ...config,
    },
  });
  return result.data as QuotesResponse;
}

export default {
  getQuotesFromMovie,
};
