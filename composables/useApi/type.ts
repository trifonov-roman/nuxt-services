import type { UseFetchOptions } from "#app";
import type { paths } from "~/types/api";

export type ApiOptions<T> = Omit<UseFetchOptions<T>, "$fetch" | "method">;

export type UseApi = {
  <T>(url: keyof paths, options?: ApiOptions<T>): ReturnType<
    typeof useFetch<T>
  >;
  <T>(url: string, options?: ApiOptions<T>): ReturnType<typeof useFetch<T>>;
};
