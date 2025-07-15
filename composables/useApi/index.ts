import type { paths } from "~/types/api";
import type { ApiOptions } from "./type";

/**
 * @param url  путь до API (автокомплит поддерживается, но можно и руками)
 */


export const useApi = <T>(
  url: keyof paths | string,
  options?: ApiOptions<T>
) => {
  const resolvedUrl = resolveUrl(url as string, options?.dinamic); // заменяет {dinamic} на конкретное значение

  return useFetch(resolvedUrl, {
    $fetch: useNuxtApp().$api,
    method: "get",
    ...options,
  });
};
