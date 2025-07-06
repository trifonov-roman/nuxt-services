import type { paths } from "~/types/api";
import type { GetUser } from "./type";

export const getUser = () => {
  return useApi<GetUser>("/user");
};

export const getUserFollowng = (username: string) => {
  return useApi(`/user/blocks/${username}` as keyof paths);
};
