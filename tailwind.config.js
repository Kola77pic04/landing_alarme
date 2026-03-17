const tailwindcss = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                vocal: {
                    primary: "#0A4D9F",
                    secondary: "#1E75D9",
                    light: "#F8FAFC", // Light gray
                    dark: "#0f172a",  // Slate 900
                    gray: "#64748b",  // Slate 500
                },
            },
            fontFamily: {
                sans: ["Roboto", "sans-serif"],
            },
            boxShadow: {
                soft: "0 2px 10px rgba(0, 0, 0, 0.03)",
                card:
                    "0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)",
                glow: "0 0 20px rgba(30, 117, 217, 0.2)",
            },
            animation: {
                "infinite-scroll": "infinite-scroll 40s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
};

export default tailwindcss;