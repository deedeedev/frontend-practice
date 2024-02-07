import FAQAccordion from "@/components/FAQAccordion/FAQAccordion"

import backgroundImage from "./background-pattern-mobile.svg"

export default function Page() {
  return (
    <main
      className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-faqLightPink"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <FAQAccordion />
    </main>
  )
}
