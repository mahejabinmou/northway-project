/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Ubuntu: ["Ubuntu", "sans-serif"],
                Varela: ["Varela Round", "sans-serif"],
                helvetica: ["Helvetica", "Arial", "sans-serif"],
            },
            backgroundImage: {
                "overlay-gradient":
                    "linear-gradient(rgba(222, 222, 0, 1), rgba(0, 4444, 0, 0))",
            },
            boxShadow: {
                officeShadow: "4px 4px 15px 0px rgba(0, 0, 0, 0.10)",
                formShadow: "4px 4px 32.5px 0px rgba(0, 0, 0, 0.15)",
            },
            borderColor: {
                custom: "rgba(0, 0, 0, 0.10)", // Custom border color
            },

            screens: {
                xs: "375px",
            },
        },
    },
    plugins: [],
}
