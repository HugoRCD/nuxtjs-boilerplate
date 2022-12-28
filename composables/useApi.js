export const useApi = async (url, method, options) => {
  const config = useRuntimeConfig();
  return await $fetch(config.public.apiUrl + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(options),
    withCredentials: true,
  });
};
