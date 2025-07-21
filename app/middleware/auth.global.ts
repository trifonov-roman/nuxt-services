import { useUserStore } from "@user/store";

export default defineNuxtRouteMiddleware(async () => {
  const auth = useUserStore();

  if (!auth.user) {
    await auth.init();
  }
});
