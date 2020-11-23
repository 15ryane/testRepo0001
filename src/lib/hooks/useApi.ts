import * as React from "react";
import { AxiosResponse, AxiosError } from "axios";
import { HttpConfig, http } from "../common";

export const useApi = <T, U>() => {
  const [error, setError] = React.useState<
    | {
        isError: boolean;
        response: AxiosError<U>["response"];
      }
    | undefined
  >({
    isError: false,
    response: undefined
  });
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<{
    result: undefined | AxiosResponse<T>["data"];
  }>({
    result: undefined
  });
  const makeQuery = (config: HttpConfig) => {
    setLoading(true);
    setError({
      isError: false,
      response: undefined
    });
    http<T>(config)
      .then((res) => {
        setLoading(false);
        setData({
          result: res.data
        });
      })
      .catch((err) => {
        setLoading(false);
        setError({
          isError: true,
          response: err as AxiosError<U>["response"]
        });
      });
  };
  return { data, loading, error, makeQuery };
};
