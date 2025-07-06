export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const fetch = $fetch.create({
    retryStatusCodes: [403],
    retry: 1,
    baseURL: config.public.baseURL,
    onResponseError({ response, options }) {
      const error = createError({
        message: "Response error",
        cause: response,
        data: options,
      });
      console.error(error);
    },
  });

  return {
    provide: {
      api: fetch,
    },
  };
});
