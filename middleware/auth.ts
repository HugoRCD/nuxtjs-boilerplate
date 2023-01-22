export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if (!user.value) {
    navigateTo("/app/login?redirectTo=" + to.path);
  }
});
