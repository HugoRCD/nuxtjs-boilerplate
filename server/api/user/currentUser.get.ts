import protectRoute from "~/server/utils/protectRoute";
import { serverSupabaseUser } from "#supabase/server";
/* import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); */

export default defineEventHandler(async (event) => {
  protectRoute(event);
  return await serverSupabaseUser(event);
});