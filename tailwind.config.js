/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'background': '#f1f1f1',
      'text': '#1e1e1e',
      'textBody': '#A1A1A1',
      'accent': '#f19a3e',
      'backgroundDark': '#e1e1e1',
      'backgroundSecond': '#F0EBE4'
    },
    extend: {
   },
  },
  plugins: [],
}