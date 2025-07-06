import type { GetUser } from "./type";

export const useUserStore = defineStore("user", () => {
  const user = shallowRef<GetUser | null>(null);

  const init = async () => {
    if (user.value) return;
    try {
      const { data } = await useApi<GetUser>("/user");
      user.value = data.value;
    } catch {
      user.value = null;
    }
  };

  return { user, init };
});
