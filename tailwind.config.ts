import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: "#050814",
                    secondary: "#0D1024",
                },
                text: {
                    primary: "#F5F5FA",
                    secondary: "#A0A3B1",
                },
                accent: {
                    primary: "#E3B623",
                    secondary: "#7B61FF",
                    teal: "#3DE0B2",
                },
            },
            fontFamily: {
                display: ["Space Grotesk", "system-ui", "sans-serif"],
                body: ["Inter", "system-ui", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            keyframes: {
                shimmer: {
                    "0%": { backgroundPosition: "200% 0" },
                    "100%": { backgroundPosition: "-200% 0" },
                },
                aurora: {
                    "0%": { backgroundPosition: "50% 50%, 50% 50%" },
                    "100%": { backgroundPosition: "350% 50%, 350% 50%" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
            },
            animation: {
                shimmer: "shimmer 3s linear infinite",
                aurora: "aurora 60s linear infinite",
                float: "float 6s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};

export default config;
