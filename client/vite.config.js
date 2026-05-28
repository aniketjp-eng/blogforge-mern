import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";// pasted from documentation

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // added tailwindcsscs () from documentation 
});
