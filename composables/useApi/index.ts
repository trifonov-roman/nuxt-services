import type { paths } from "~/types/api";
import type { ApiOptions, UseApi } from "./type";

/**
 * @param url  путь до API (автокомплит поддерживается, но можно и руками)
 */


export const useApi: UseApi = <T>(
  url: keyof paths | string,
  options?: ApiOptions<T>
) => {
  const resolvedUrl = resolveUrl(url as string, options?.dinamic); // заменяет {username} на конкретное значение

  return useFetch(resolvedUrl, {
    $fetch: useNuxtApp().$api,
    method: "get",
    ...options,
  });
};
