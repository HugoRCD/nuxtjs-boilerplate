export default defineNuxtRouteMiddleware((from, to) => {
  const isLogged = useUserStore().isLoggedIn;
});
