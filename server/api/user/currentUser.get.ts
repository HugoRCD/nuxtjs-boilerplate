import protectRoute from "~/server/utils/protectRoute";
/* import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); */

export default defineEventHandler(async (event) => {
  protectRoute(event);
  return event.context.user;
});