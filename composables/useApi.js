import { useGlobalStore } from "~/store/globalStore";
import { useUserStore } from "~/store/userStore";

import axios from "axios";

const config = useRuntimeConfig();

axios.defaults.baseURL = config.public.apiUrl;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("accessToken");

let isRefreshing = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !isRefreshing) {
      isRefreshing = true;
      const response = await axios.post(
        "/auth/refresh",
        {},
        { withCredentials: true },
      );
      if (response.status === 200) {
        useUserStore().setAccessToken(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        error.config.headers["Authorization"] =
          "Bearer " + response.data.accessToken;
        isRefreshing = false;
        return axios.request(error.config);
      }
    }
    isRefreshing = false;
    return error;
  },
);

export const useAxios = async (url, method, body = null) => {
  useGlobalStore().setLoading(true);
  const config = useRuntimeConfig();
  const authorization =
    "Bearer " + localStorage.getItem("accessToken") || useUserStore().getToken;
  const response = await axios({
    url: config.public.apiUrl + url,
    method: method,
    data: body,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: authorization,
      "Access-Control-Expose-Headers": "Set-Cookie",
    },
    withCredentials: true,
  });
  useGlobalStore().setLoading(false);
  return response.data;
};
