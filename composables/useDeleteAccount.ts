export const useDeleteAccount = async () => {
  const user = useSupabaseUser();
  const { error } = await useFetch("/api/user/deleteUser", {
    method: "DELETE",
  });
  if (!error) {
    console.log("Error deleting user: ", error);
    return;
  }
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
  navigateTo("/");
};
