import type { UseFetchOptions } from "#app";
import type { paths } from "~/types/api";
import type { DinamicValueRequest } from "~/types/base";

export type ApiOptions<T> = Omit<UseFetchOptions<T>, "$fetch" | "method"> & {
  dinamic?: DinamicValueRequest;
};
export type UseApi<T> = {
  url: keyof paths;
  options: ApiOptions<T>;
};

export type UseApiOverloads = {
  <T, E>(url: keyof paths, options?: ApiOptions<T>): ReturnType<
    typeof useFetch<T, E>
  >;
  <T, E>(url: string, options?: ApiOptions<T>): ReturnType<
    typeof useFetch<T, E>
  >;
};
