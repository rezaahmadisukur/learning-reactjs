import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // Load env file based on `mode`
    // eslint-disable-next-line no-undef
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [react()],
        define: {
            "import.meta.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY)
        }
    };
});
