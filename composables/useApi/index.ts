import type { paths } from "~/types/api";
import type { ApiOptions, UseApi } from "./type";

/**
 * @param url  путь до API (автокомплит поддерживается, но можно и руками)
 */

export const useApi: UseApi = <T>(
  url: keyof paths | string,
  options?: ApiOptions<T>
) => {
  return useFetch(url, {
    $fetch: useNuxtApp().$api,
    method: "get",
    ...options,
  });
};
