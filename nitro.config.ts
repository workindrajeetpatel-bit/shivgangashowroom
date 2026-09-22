import { defineConfig } from "nitro";

export default defineConfig({
  preset: "vercel",
  handlers: [
    {
      route: "/**",
      handler: "./dist/server/server.js",
    },
  ],
  publicAssets: [
    {
      dir: "./dist/client",
      maxAge: 31536000,
    },
  ],
});
