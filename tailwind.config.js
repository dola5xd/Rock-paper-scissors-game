/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        scissorsFrom: "hsl(39, 89%, 49%)",
        scissorsTo: "hsl(40, 84%, 53%)",
        paperFrom: "hsl(230, 89%, 62%)",
        paperTo: "hsl(230, 89%, 65%)",
        rockFrom: "hsl(349, 71%, 52%)",
        rockTo: "hsl(349, 70%, 56%)",
        // ### Neutral
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        // ### Background
        radialFrom: "hsl(214, 47%, 23%)",
        radialTo: "hsl(237, 49%, 15%)",
      },
    },
  },
  plugins: [],
};
