import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import Components from "unplugin-react-components/vite";
// import { createResolver } from "unplugin-react-components";

// const PrimeReactResolver = createResolver({
//   module: "primereact/",
//   key: "default",
//   // Optionally, you can exclude certain components if needed
//   exclude: (name) => {
//     // Add any exclusions if necessary
//     return false;
//   },
// });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Components({
      // resolvers: [PrimeReactResolver],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
