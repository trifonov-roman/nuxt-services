export const useUiStore = defineStore("ui", () => {
  const isOpenSideBar = ref(false);
  const randomText = ref("Рандомный текст");
  return { isOpenSideBar, randomText };
});
