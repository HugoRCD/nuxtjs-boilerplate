export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  if (!user.value) {
    navigateTo("/app/login?redirectTo=" + to.path);
  }
});
