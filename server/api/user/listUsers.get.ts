import { serverSupabaseServiceRole } from "#supabase/server";

export default eventHandler(async (event) => {
  const client = serverSupabaseServiceRole(event);
  const { data } = await client.auth.admin.listUsers();
  return data;
});