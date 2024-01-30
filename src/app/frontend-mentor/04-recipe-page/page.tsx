import type { Metadata } from "next";
import { Outfit, Young_Serif } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });
const youngSerif = Young_Serif({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor - Recipe Page Challenge",
  description: "",
};

export default function Page() {
  return <div className={`${outfit.className}`}>Hello, World!</div>;
}
