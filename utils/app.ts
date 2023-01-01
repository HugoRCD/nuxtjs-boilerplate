import { useLocalStorage } from "~/composables/useLocalStorage";

export function AppSetup() {
  const accessToken = useLocalStorage().get("accessToken");
  accessToken ? useUserStore().setAccessToken(accessToken) : null;
}
