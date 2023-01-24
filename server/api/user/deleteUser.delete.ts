import { serverSupabaseServiceRole } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole(event);
  const { data } = await client.auth.admin.deleteUser(event.context.user.id);
  return { sensitiveData: data };
});