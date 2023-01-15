export default defineNuxtRouteMiddleware(() => {
  const isLogged = useUserStore().isLoggedIn;

  if (!isLogged) {
    navigateTo({ name: "Login" });
  }
});
