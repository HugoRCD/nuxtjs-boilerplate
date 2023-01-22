import protectRoute from "~/server/utils/protectRoute";
import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  protectRoute(event);
  return await serverSupabaseUser(event);
});