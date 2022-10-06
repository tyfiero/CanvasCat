module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "100px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        blues: {
          50: "HSL(var(--colorDark1HslBase), 95%)",
          100: "HSL(var(--colorDark1HslBase), 85%)",
          200: "HSL(var(--colorDark1HslBase), 75%)",
          300: "HSL(var(--colorDark1HslBase), 65%)",
          400: "HSL(var(--colorDark1HslBase), 55%)",
          500: "HSL(var(--colorDark1HslBase), 45%)",
          600: "HSL(var(--colorDark1HslBase), 35%)",
          700: "HSL(var(--colorDark1HslBase), 25%)",
          800: "HSL(var(--colorDark1HslBase), 15%)",
          900: "HSL(var(--colorDark1HslBase), 5%)",
        },
        pinks: {
          50: "HSL(var(--colorLight1HslBase), 95%)",
          100: "HSL(var(--colorLight1HslBase), 85%)",
          200: "HSL(var(--colorLight1HslBase), 75%)",
          300: "HSL(var(--colorLight1HslBase), 65%)",
          400: "HSL(var(--colorLight1HslBase), 55%)",
          500: "HSL(var(--colorLight1HslBase), 45%)",
          600: "HSL(var(--colorLight1HslBase), 35%)",
          700: "HSL(var(--colorLight1HslBase), 25%)",
          800: "HSL(var(--colorLight1HslBase), 15%)",
          900: "HSL(var(--colorLight1HslBase), 5%)",
        },
        t: {
          bd: "var(--colorDark2)",
          bl: "var(--colorDark1)",
          pd: "var(--colorLight2)",
          pl: "var(--colorLight1)",
        },
        clear: {
          bd: "RGBA(37, 73, 165, 0.3)",
          bl: "RGBA(78, 174, 247, 0.9)",
          pd: "RGBA(178, 92, 201, 0.3)",
          pl5: "hsla(var(--colorLight1base),0.9)",
          pl4: "hsla(var(--colorLight1base),0.7)",
          pl3: "hsla(var(--colorLight1base),0.5)",
          pl2: "hsla(var(--colorLight1base),0.3)",
          pl1: "hsla(var(--colorLight1base),0.1)",

          pm5: "hsla(var(--colorLight2base), 0.9)",
          pm4: "hsla(var(--colorLight2base), 0.7)",
          pm3: "hsla(var(--colorLight2base), 0.5)",
          pm2: "hsla(var(--colorLight2base), 0.3)",
          pm1: "hsla(var(--colorLight2base), 0.1)",

          pd5: "hsla(var(--colorLight2base), 0.9)",
          pd4: "hsla(var(--colorLight2base), 0.7)",
          pd3: "hsla(var(--colorLight2base), 0.5)",
          pd2: "hsla(var(--colorLight2base), 0.3)",
          pd1: "hsla(var(--colorLight2base), 0.1)",

          bl5: "hsla(var(--colorDark1base), 0.9)",
          bl4: "hsla(var(--colorDark1base), 0.7)",
          bl3: "hsla(var(--colorDark1base), 0.5)",
          bl2: "hsla(var(--colorDark1base), 0.3)",
          bl1: "hsla(var(--colorDark1base), 0.1)",

          bd5: "hsla(var(--colorDark2base), 0.9)",
          bd4: "hsla(var(--colorDark2base), 0.7)",
          bd3: "hsla(var(--colorDark2base), 0.5)",
          bd2: "hsla(var(--colorDark2base), 0.3)",
          bd1: "hsla(var(--colorDark2base), 0.1)",

      

         
        },
      },
    },
  },
  plugins: [],
};
