module.exports = {
  apps: [
    {
      name: "nuxt3-boilerplate",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
