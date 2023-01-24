import Stripe from "stripe";

const config = useRuntimeConfig();
const stripe = new Stripe(config.private.stripeSecretKey, {
  apiVersion: "2022-11-15",
});

export async function getSubscriptionUrl(email: string, productId: string) {
  const customerEmail = email;
  const price = await stripe.prices.retrieve(productId);

  const customer = await stripe.customers.create({
    email: customerEmail,
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer: customer.id,
    mode: "subscription",
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    success_url: config.public.appDomain + "app/profile",
    cancel_url: config.public.appDomain + "app/profile",
  });
  return { url: session.url };
}