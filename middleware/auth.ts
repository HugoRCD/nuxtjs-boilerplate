export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Middleware: auth.ts");
  console.log("to: ", to);
  console.log("from: ", from);
});
