import type { Config } from "tailwindcss"

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
        // 06 blog preview card
        bpcYellow: "hsl(47, 88%, 63%)",
        bpcWhite: "hsl(0, 0%, 100%)",
        bpcGray: "hsl(0, 0%, 50%)",
        bpcBlack: "hsl(0, 0%, 7%)",
        // 07 faq accordion
        faqWhite: "hsl(0, 0%, 100%)",
        faqPurple: "#ad28eb",
        faqLightPink: "hsl(275, 100%, 97%)",
        faqGrayishPurple: "hsl(292, 16%, 49%)",
        faqDarkPurple: "hsl(292, 42%, 14%)",
        // 08 product preview card
        ppcDarkCyan: "hsl(158, 36%, 37%)",
        ppcVeryDarkCyan: "hsl(156, 42%, 18%)",
        ppcCream: "hsl(30, 38%, 92%)",
        ppcVeryDarkBlue: "hsl(212, 21%, 14%)",
        ppcDarkGrayishBlue: "hsl(228, 12%, 48%)",
        ppcWhite: "hsl(0, 0%, 100%)",
        // 09 interactive rating component
        ircLightGray: "hsl(217, 12%, 63%)",
        ircMediumGray: "hsl(216, 12%, 54%)",
        ircDarkBlue: "hsl(213, 19%, 18%)",
        ircDarkerBlue: "hsl(215, 21%, 16%)",
        ircVeryDarkBlue: "hsl(216, 12%, 8%)",
        ircOrange: "hsl(25, 97%, 53%)",
        // 10 nft preview card
        npcSoftBlue: "hsl(215, 51%, 70%)",
        npcCyan: "hsl(178, 100%, 50%)",
        npcVeryDarkBlueMain: "hsl(217, 54%, 11%)",
        npcVeryDarkBlueCard: "hsl(216, 50%, 16%)",
        npcVeryDarkBlueLine: "hsl(215, 32%, 27%)",
        // 11 profile card
        pcDarkCyan: "hsl(185, 75%, 39%)",
        pcVeryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
        pcDarkGrayishBlue: "hsl(227, 10%, 46%)",
        pcDarkGray: "hsl(0, 0%, 59%)",
        // 12 social proof section
        spsVeryDarkMagenta: "hsl(300, 43%, 22%)",
        spsSoftPink: "hsl(333, 80%, 67%)",
        spsDarkGrayishMagenta: "hsl(303, 10%, 53%)",
        spsLightGrayishMagenta: "hsl(300, 24%, 96%)",
        // 13 social card feature section
        scfsRed: "hsl(0, 78%, 62%)",
        scfsCyan: "hsl(180, 62%, 55%)",
        scfsOrange: "hsl(34, 97%, 64%)",
        scfsBlue: "hsl(212, 86%, 64%)",
        scfsVeryDarkBlue: "hsl(234, 12%, 34%)",
        scfsGrayishBlue: "hsl(229, 6%, 66%)",
        scfsVeryLightGray: "hsl(0, 0%, 98%)",
        // 14 base apparel coming soon page
        bacspDesaturatedRed: "hsl(0, 36%, 70%)",
        bacspSoftRed: "hsl(0, 93%, 68%)",
        bacspDarkGrayishRed: "hsl(0, 6%, 24%)",
        bacspGradient1From: "hsl(0, 100%, 100%)",
        bacspGradient1To: "hsl(0, 100%, 98%)",
        bacspGradient2From: "hsl(0, 80%, 86%)",
        bacspGradient2To: "hsl(0, 74%, 74%)",
      },
      backgroundImage: {
        // 07 faq accordion
        "img-faq-accordion-desktop":
          "url('/07-faq-accordion/background-pattern-desktop.svg')",
        "img-faq-accordion-mobile":
          "url('/07-faq-accordion/background-pattern-mobile.svg')",
        // 12 social proof section:
        "social-proof-section-desktop":
          "url('/12-social-proof-section/bg-pattern-top-desktop.svg'), url('/12-social-proof-section/bg-pattern-bottom-desktop.svg')",
        "social-proof-section-mobile":
          "url('/12-social-proof-section/bg-pattern-top-mobile.svg'), url('/12-social-proof-section/bg-pattern-bottom-mobile.svg')",
      },
      backgroundPosition: {
        "position-social-proof-section": "left top, right bottom",
      },
    },
  },
  plugins: [],
}
export default config
