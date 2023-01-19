import { LOTR } from "..";
import api from "../api";
import { ConfigOptions, MoviesResponse } from "../types";

async function getAll(config: ConfigOptions = {}) {
  const result = await api.get("/", {
    params: { ...config },
  });
  return result.data as MoviesResponse;
}

async function getOne(id: string, config: ConfigOptions = {}) {
  const result = await api.get(`/${id}`, {
    params: { ...config },
  });
  return result.data as MoviesResponse;
}

export default {
  getAll,
  getOne,
};
