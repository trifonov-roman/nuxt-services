import type { DinamicValueRequest } from "~/types/base";

export const resolveUrl = (path: string, dinamic?:DinamicValueRequest) =>  {
  if (!dinamic) return path;
  return path.replace(/{(\w+)}/g, (_, key) => encodeURIComponent(dinamic[key]));

}