import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  event.context.user = await serverSupabaseUser(event);
  if (!event.context.user) {
    return;
  }
  const { data } = await client.from("account").select("*").eq("id", event.context.user.id).single();
  if (data) {
    event.context.user.admin = data.admin;
  }
});