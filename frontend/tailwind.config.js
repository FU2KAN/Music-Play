/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}", // Bu satır eklendi
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#ff0000", // Burada kırmızı rengi tanımlıyoruz
      },
      width: {
        150: "150px", // Özel genişlik tanımlaması
      },
      height: {
        18: "18px", // Özel yükseklik tanımlaması
      },
    },
  },
  plugins: [],
};
