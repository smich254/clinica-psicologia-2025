/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "psych-blue-dark": "#1E3A8A",  // Azul oscuro principal
        "psych-blue": "#3B82F6",       // Azul medio para acciones
        "psych-blue-light": "#BFDBFE", // Azul claro para fondos
        "psych-gray-dark": "#4B5563",  // Gris oscuro para textos
        "psych-gray-light": "#F3F4F6", // Gris claro para fondos
      },
    },
  },
  plugins: [],
};