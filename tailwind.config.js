// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Update paths as necessary
    "./pages/**/*.{js,jsx,ts,tsx}", // For Next.js, include pages folder as well
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",   // For new Next.js 'app' folder structure
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
