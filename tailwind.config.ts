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
        // 15 intro component with signup form
        icwsufRed: "hsl(0, 100%, 74%)",
        icwsufGreen: "hsl(154, 59%, 51%)",
        icwsufDarkGreen: "hsl(154, 59%, 41%)",
        icwsufBlue: "hsl(248, 32%, 49%)",
        icwsufDarkBlue: "hsl(249, 10%, 26%)",
        icwsufGrayishBlue: "hsl(246, 25%, 77%)",
        // 16 order summary component
        oscPaleBlue: "hsl(225, 100%, 94%)",
        oscBrightBlue: "hsl(245, 75%, 52%)",
        oscVeryPaleBlue: "hsl(225, 100%, 98%)",
        oscDesaturatedBlue: "hsl(224, 23%, 55%)",
        oscDarkBlue: "hsl(223, 47%, 23%)",
        // 17 stats preview card component
        spccVeryDarkBlue: "hsl(233, 47%, 7%)",
        spccDarkDesaturatedBlue: "hsl(244, 38%, 16%)",
        spccSoftViolet: "hsl(277, 64%, 61%)",
        spccSlightlyTransparentWhite1: "hsla(0, 0%, 100%, 0.75)",
        spccSlightlyTransparentWhite2: "hsla(0, 0%, 100%, 0.6)",
        // 18 article preview component
        apcVeryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        apcDesaturatedDarkBlue: "hsl(214, 17%, 51%)",
        apcGrayishBlue: "hsl(212, 23%, 69%)",
        apcLightGrayishBlue: "hsl(210, 46%, 95%)",
        // 19 single price grid component
        spgcCyan: "hsl(179, 62%, 43%)",
        spgcLightCyan: "hsl(179, 47%, 52%)",
        spgcBrightYellow: "hsl(71, 73%, 54%)",
        spgcLightGray: "hsl(204, 43%, 93%)",
        spgcGrayishBlue: "hsl(218, 22%, 67%)",
        // 20 ping single column coming soon page
        psccspPaleBlue: "hsl(223, 100%, 88%)",
        psccspBlue: "hsl(223, 87%, 63%)",
        psccspLightRed: "hsl(354, 100%, 66%)",
        psccspGray: "hsl(0, 0%, 59%)",
        psccspVeryDarkBlue: "hsl(209, 33%, 12%)",
        // 21 huddle landing page with single introductory section
        hlpwsisViolet: "hsl(257, 40%, 49%)",
        hlpwsisSoftMagenta: "hsl(300, 69%, 71%)",
        // 22 age calculator app
        acaPurple: "hsl(259, 100%, 65%)",
        acaLightRed: "hsl(0, 100%, 67%)",
        acaOffWhite: "hsl(0, 0%, 94%)",
        acaLightGray: "hsl(0, 0%, 86%)",
        acaSmokeyGray: "hsl(0, 1%, 44%)",
        acaOffBlack: "hsl(0, 0%, 8%)",
        // 23 news homepage
        nhSoftOrange: "hsl(35, 77%, 62%)",
        nhSoftRed: "hsl(5, 85%, 63%)",
        nhOffWhite: "hsl(36, 100%, 99%)",
        nhGrayishBlue: "hsl(233, 8%, 79%)",
        nhDarkGrayishBlue: "hsl(236, 13%, 42%)",
        nhVeryDarkBlue: "hsl(240, 100%, 5%)",
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
        // 15 intro component with signup form
        icwsfMobile:
          "url('/15-intro-component-with-signup-form/bg-intro-mobile.png')",
        icwsfDesktop:
          "url('/15-intro-component-with-signup-form/bg-intro-desktop.png')",
        // 16 order summary component
        oscMobile:
          "url('/16-order-summary-component/pattern-background-mobile.svg')",
        oscDesktop:
          "url('/16-order-summary-component/pattern-background-desktop.svg')",
        // 17 stats preview card component
        spccDesktop:
          "url('/17-stats-preview-card-component/image-header-desktop.jpg')",
        // 21 huddle landing page with single introductory section
        hlpwsisMobile:
          "url('/21-huddle-landing-page-with-single-introductory-section/bg-mobile.svg')",
        hlpwsisDesktop:
          "url('/21-huddle-landing-page-with-single-introductory-section/bg-desktop.svg')",
      },
      backgroundPosition: {
        "position-social-proof-section": "left top, right bottom",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
}
export default config
