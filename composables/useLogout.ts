export const useLogout = async () => {
  const user = useSupabaseUser();
  const { auth } = useSupabaseAuthClient();
  const { error } = await auth.signOut();
  if (error) {
    console.error(error);
    return;
  }
  // The Nuxt Supabase auth *should* be doing this
  // for us, but it isn't for some reason.
  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: {
        event: "SIGNED_OUT",
        session: null
      },
    });
    user.value = null;
  } catch (e) {
    console.error(error);
  }
  await navigateTo("/login");
};
