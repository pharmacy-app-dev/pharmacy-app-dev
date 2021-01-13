module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                white: {
                    DEFAULT: "#FFFFFF",
                    dark: "#1F1F1F",
                },
                "white-50": {
                    DEFAULT: "#F3F4FB",
                    dark: "#121212",
                },
                blue:{
                    DEFAULT: '#535884',
                },
                pink:{
                    DEFAULT: '#B366B1'
                }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
