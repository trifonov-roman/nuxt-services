import type { GetUser } from "./type";

export const getUser = () => {
  return useApi<GetUser>("/user",{
        key:'getUser'
  });
};

export const getUserFollowng = (username: string) => {
  return useApi(`/user/blocks/${username}`);
};
