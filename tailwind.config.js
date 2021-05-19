module.exports = {
  purge: {
    // enabled: process.env.NODE_ENV === "production",
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
      translate: ['active'],
    },
  },
  plugins: [],
}