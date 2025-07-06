import type { UseFetchOptions } from "#app";
import type { paths } from "~/types/api";

type Options<T> = Omit<UseFetchOptions<T>, "$fetch" | "method">;
export const useApi = <T>(url: keyof paths, options?: Options<T>) => {
  return useFetch(url, {
    $fetch: useNuxtApp().$api,
    method: "get",
    ...options,
  });
};
