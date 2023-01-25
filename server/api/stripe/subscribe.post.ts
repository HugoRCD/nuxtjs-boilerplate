import protectRoute from "~/server/utils/protectRoute";
import { getSubscriptionUrl } from "~/server/api/services/stripeService";
/* import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); */

export default defineEventHandler(async (event) => {
  protectRoute(event);
  const body = await readBody(event);
  const email = event.context.user.email;
  const productId = body.priceId;
  const { url } = await getSubscriptionUrl(email, productId);
  if (url) {
    return sendRedirect(event, url);
  }
});