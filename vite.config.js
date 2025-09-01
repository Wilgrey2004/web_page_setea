import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "https://wilgrey2004.github.io/web_page_setea",
  server: {
    historyApiFallback: true, // ⚡ para que las rutas siempre apunten a index.html
  },
});
