import type { GetUser } from "./index.type";

export const getUser = () => {
  return useApi<GetUser>("/user");
};
