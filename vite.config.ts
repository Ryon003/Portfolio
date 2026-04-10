import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Site is served from repo root while app files live under /dist.
  base: "/Portfolio/dist/",
});
