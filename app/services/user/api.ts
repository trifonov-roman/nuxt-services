import type { GetUser } from "./type";

export const getUser = () => {
  return useApi<GetUser, { error: number }>("/user", {
    key: "getUser",
  });
};
export const getUserFollowng = (username: string) => {
  return useApi(`/user/blocks/{username}`, {
    key: "getUserFollowng",
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
