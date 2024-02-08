import FAQAccordion from "@/components/FAQAccordion/FAQAccordion"

const questions = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ex aliquam. Ea, sequi quis molestiae, rerum suscipit cumque minima ullam voluptates consectetur distinctio, optio eveniet sed perspiciatis adipisci explicabo labore.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati maiores veritatis natus! Consequatur architecto in reiciendis, corrupti, ratione nisi voluptate debitis quos odit qui natus sed ab aliquam repellat.",
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque explicabo reiciendis exercitationem temporibus. Tempore voluptates exercitationem porro, fuga ex amet tempora quae, consequuntur commodi vitae deleniti earum magnam praesentium!",
  },
]

export default function Page() {
  return (
    <div className="bg-img-faq-accordion-mobile md:bg-img-faq-accordion-desktop flex min-h-screen w-full items-center justify-center overflow-hidden bg-faqLightPink bg-[size:100%_auto] bg-no-repeat">
      <FAQAccordion questions={questions} />
    </div>
  )
}
