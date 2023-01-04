import { useGlobalStore } from "~/store/globalStore";
import { useUserStore } from "~/store/userStore";
import { useLocalStorage } from "~/composables/useLocalStorage";

import axios from "axios";

export const useAxios = async (url, method, body = null) => {
  axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_GOOGLE_CLIENT_ID;
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + useLocalStorage().get("accessToken");

  let isRefreshing = false;

  axios.interceptors.response.use(
    (resp) => resp,
    async (error) => {
      if (error.response.status === 401 && !isRefreshing) {
        isRefreshing = true;
        const response = await axios.post("/auth/refresh", {});
        if (response.status === 200) {
          useUserStore().setAccessToken(response.data.accessToken);
          useLocalStorage().set("accessToken", response.data.accessToken);
          error.config.headers["Authorization"] =
            "Bearer " + response.data.accessToken;
          isRefreshing = false;
          return axios.request(error.config);
        } else {
          useUserStore().logout();
          useRouter().push({ name: "Login" });
        }
      }
      isRefreshing = false;
      return error;
    },
  );

  useGlobalStore().setLoading(true);
  const response = await axios({
    method: method,
    url: url,
    data: body,
    headers: {
      Authorization: "Bearer " + useUserStore().getToken,
    },
    withCredentials: true,
  });
  useGlobalStore().setLoading(false);
  return response.data;
};
