import { useNuxtApp } from "#app";
import type { ApiOptions, UseApiOverloads } from "./type";

export const useApi: UseApiOverloads = <T, E>(
  url: string,
  options?: ApiOptions<T>
) => {
  const resolvedUrl = resolveUrl(url, options?.dinamic);

  return useFetch<T, E>(resolvedUrl, {
    $fetch: useNuxtApp().$api,
    //@ts-ignore
    method: "get",
    ...options,
  });
};
