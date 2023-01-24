export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if (!user.value) {
    navigateTo("/login?redirectTo=" + to.path);
  }
});
