import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "htps://lucastheldl.github.io/React-TMDB/",
  plugins: [react()],
});
