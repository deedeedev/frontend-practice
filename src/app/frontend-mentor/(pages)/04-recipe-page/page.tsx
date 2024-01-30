import Image from "next/image";
import type { Metadata } from "next";
import { Outfit, Young_Serif } from "next/font/google";

import omeletteImage from "./image-omelette.jpg";

const outfit = Outfit({ subsets: ["latin"] });
const youngSerif = Young_Serif({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor - Recipe Page Challenge",
  description: "Simple Omelette Recipe",
};

export default function Page() {
  return (
    <div className={`${outfit.className} container mx-auto`}>
      {/* Image */}
      <div>
        <Image src={omeletteImage} alt="recipe image" />
      </div>
    </div>
  );
}
