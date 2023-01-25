import protectRoute from "~/server/utils/protectRoute";
import { User } from "~/types/User";

export default defineEventHandler(async (event): Promise<User> => {
  protectRoute(event);
  return event.context.user;
});