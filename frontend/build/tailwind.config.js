module.exports = {
  theme: {
    extend: {
      animation: {
        flicker: "flicker 1.5s infinite",
      },
      keyframes: {
        flicker: {
          "0%": {
            opacity: 1,
            textShadow:
              "0 0 5px rgba(255, 87, 51, 1), 0 0 10px rgba(255, 87, 51, 1)",
          },
          "50%": { opacity: 0.6, textShadow: "none" },
          "100%": {
            opacity: 1,
            textShadow:
              "0 0 5px rgba(255, 87, 51, 1), 0 0 10px rgba(255, 87, 51, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
