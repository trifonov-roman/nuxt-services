import type { GetUser } from "./type";

export const getUser = () => {
  return useApi<GetUser>("/user", {
    key: "getUser",
  });
};

export const getUserFollowng = (username: string) => {
  return useApi(`/user/blocks/{username}`, {
    dinamic: {
      username,
    },
  });
};

//Пример useMutation
export const updateUser = async (body: any) => {
  return useNuxtApp().$api<any>("/users/2", {
    method: "PUT",
    body,
  });
};
