export const useCurrentUser = async () => {
  const { data } = await useFetch("/api/user/currentUser", {
    method: "GET",
  });
  return data;
};
