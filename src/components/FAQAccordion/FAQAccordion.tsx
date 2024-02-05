import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function FAQAccordion() {
  return <div className={`${workSans.className}`}>Hello, World!</div>;
}
