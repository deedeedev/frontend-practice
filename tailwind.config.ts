import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 04 recipe page
        nutmeg: "hsl(14, 45%, 36%)",
        darkRaspberry: "hsl(332, 51%, 32%)",
        roseWhite: "hsl(330, 100%, 98%)",
        eggshell: "hsl(30, 54%, 90%)",
        lightGray: "hsl(30, 18%, 87%)",
        wengeBrown: "hsl(30, 10%, 34%)",
        darkCharcoal: "hsl(24, 5%, 18%)",
        // 05 social links profile
        slpGreen: "hsl(75, 94%, 57%)",
        slpWhite: "hsl(0, 0%, 100%)",
        slpGray: "hsl(0, 0%, 20%)",
        slpDarkGray: "hsl(0, 0%, 12%)",
        slpOffBlack: "hsl(0, 0%, 8%)",
        bpcYellow: "hsl(47, 88%, 63%)",
        bpcWhite: "hsl(0, 0%, 100%)",
        bpcGray: "hsl(0, 0%, 50%)",
        bpcBlack: "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
export default config;
