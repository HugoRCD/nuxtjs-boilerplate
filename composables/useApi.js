import { useGlobalStore } from "~/store/globalStore";
import { useUserStore } from "~/store/userStore";

/*
 *  TODO:
 *   - Add other composables for other API calls like refresh token, etc.
 *   - Add localStorage handling
 *   - Finish implementing the refresh token logic
 *   - Fix deconnection error
 */

export const useApi = async (url, method, body = null) => {
  const config = useRuntimeConfig();
  const authorization =
    "Bearer " + localStorage.getItem("accessToken") || useUserStore().getToken;
  return await $fetch(config.public.apiUrl + url, {
    onRequest() {
      useGlobalStore().setLoading(true);
    },
    onRequestError() {
      useGlobalStore().setLoading(false);
    },
    onResponse() {
      useGlobalStore().setLoading(false);
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await $fetch(config.public.apiUrl + "auth/refresh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
            Authorization: authorization,
            "Access-Control-Expose-Headers": "Set-Cookie",
          },
          credentials: "include",
        })
          .then((response) => {
            console.log(response);
            useUserStore().setAccessToken(response.accessToken);
          })
          .catch(() => {
            useUserStore().logout();
            useRouter().push({ name: "Login" });
          });
      }
      useGlobalStore().setLoading(false);
    },
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: authorization,
      "Access-Control-Expose-Headers": "Set-Cookie",
    },
    credentials: "include",
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
};
