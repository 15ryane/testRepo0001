import * as qs from "query-string";
import axios from "axios";
import { getHostBase, HOST_MAP } from "../const/api";

type HttpMethod = "GET" | "POST" | "PATCH";
export interface HttpConfig {
  host: keyof typeof HOST_MAP;
  endpoint: string;
  method: HttpMethod;
  params?: object;
  body?: object;
  auth?: boolean;
}

// Configure axios to throw server responses as errors
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function(err) {
    return err.response ? Promise.reject(err.response) : Promise.reject(err);
  }
);

export const http = <T>(config: HttpConfig) => {
  const { host, endpoint, method, params, body, auth } = config;
  const query = params ? "?" + qs.stringify(params) : "";
  const headers = {
    "Content-Type": "application/json",
    Authorization: auth ? "Bearer " + localStorage.getItem("token") : undefined
  };
  const hostBase = getHostBase(host);
  return axios.request<T>({
    url: `${hostBase}${endpoint}${query}`,
    method,
    headers,
    params: query,
    data: body ? JSON.stringify(body) : undefined
  });
};
