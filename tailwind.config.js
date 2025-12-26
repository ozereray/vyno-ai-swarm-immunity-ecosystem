module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        vyno: {
          black: "#050505",
          zinc: "#111111",
          accent: "#00FF88", // Bağışıklık yeşili
          blue: "#00E5FF",   // Otonom mavisi
        }
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}