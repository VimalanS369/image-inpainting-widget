const daisyui = require("daisyui");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Ubuntu'],
        headingcust: ['Nunito Sans'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["night"], // Use the DaisyUI "night" theme
  },
};
