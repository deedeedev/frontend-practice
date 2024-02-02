import Image from "next/image";
import { Outfit, Young_Serif } from "next/font/google";
import type { Metadata } from "next";

import omeletteImage from "./image-omelette.jpg";

const outfit = Outfit({ weight: ["400", "600", "700"], subsets: ["latin"] });
const youngSerif = Young_Serif({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor - Recipe Page Challenge",
  description: "Simple Omelette Recipe",
};

export default function Page() {
  return (
    <div
      className={`${outfit.className} container mx-auto h-full overflow-hidden max-w-2xl bg-white text-gray-500 sm:my-8 sm:rounded-lg`}
    >
      {/* Image */}
      <div className="sm:p-8 sm:pb-0">
        <Image src={omeletteImage} className="sm:rounded-lg" alt="recipe image" />
      </div>
      {/* Content */}
      <div className="m-9 space-y-8">
        {/* Title */}
        <h1 className={`${youngSerif.className} text-4xl text-darkCharcoal`}>Simple Omelette Recipe</h1>
        {/* Intro */}
        <p className="mt-6">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection,
          optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        {/* Preparation Time */}
        <div className="bg-roseWhite p-6 mt-8">
          <h2 className="text-darkRaspberry text-xl font-bold mb-3">Preparation time</h2>
          <ul className="list-disc ml-4 space-y-2">
            <li className="pl-4 marker:text-darkRaspberry">
              <span className="font-bold">Total:</span> Approximately 10 minutes
            </li>
            <li className="pl-4 marker:text-darkRaspberry">
              <span className="font-bold">Preparation:</span> 5 minutes
            </li>
            <li className="pl-4 marker:text-darkRaspberry">
              <span className="font-bold">Cooking:</span> 5 minutes
            </li>
          </ul>
        </div>
        {/* Ingredients */}
        <div className="mt-8">
          <h2 className={`${youngSerif.className} text-nutmeg text-3xl font-bold mb-6`}>Ingredients</h2>
          <ul className="list-disc ml-4 space-y-2">
            <li className="pl-4 marker:text-nutmeg">2-3 large eggs</li>
            <li className="pl-4 marker:text-nutmeg">Salt, to taste</li>
            <li className="pl-4 marker:text-nutmeg">Pepper, to taste</li>
            <li className="pl-4 marker:text-nutmeg">1 tablespoon of butter or oil</li>
            <li className="pl-4 marker:text-nutmeg">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <hr className="border-t-1 border-gray-200" />
        {/* Instructions */}
        <div>
          <h2 className={`${youngSerif.className} text-nutmeg text-3xl font-bold mb-6`}>Instructions</h2>
          <ol className="list-decimal ml-4 space-y-2">
            <li className="pl-4 marker:text-nutmeg marker:font-bold">
              <span className="font-bold">Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and pepper
              until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
            </li>
            <li className="pl-4 marker:text-nutmeg marker:font-bold">
              <span className="font-bold">Heat the pan: </span>Place a non-stick frying pan over medium heat and add
              butter or oil.
            </li>
            <li className="pl-4 marker:text-nutmeg marker:font-bold">
              <span className="font-bold">Cook the omelette: </span>Once the butter is melted and bubbling, pour in the
              eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </li>
            <li className="pl-4 marker:text-nutmeg marker:font-bold">
              <span className="font-bold">Add fillings (optional): </span>When the eggs begin to set at the edges but
              are still slightly runny in the middle, sprinkle your chosen fillings over ons half of the omelette.
            </li>
            <li className="pl-4 marker:text-nutmeg marker:font-bold">
              <span className="font-bold">Fold and serve: </span>As the omelette continues to cook, carefully lift one
              edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
            </li>
            <li className="pl-4 marker:text-nutmeg marker:font-bold">
              <span className="font-bold">Enjoy: </span>Serve hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>
        <hr className="border-t-1 border-gray-200" />
        {/* Nutrition */}
        <div className="space-y-6">
          <h2 className={`${youngSerif.className} text-nutmeg text-3xl font-bold`}>Nutrition</h2>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <table className="w-full max-w-lg space-y-3">
            <tr>
              <td className="border-b pl-8 pb-3">Calories</td>
              <td className="border-b font-bold text-nutmeg pb-3">277kcal</td>
            </tr>
            <tr>
              <td className="border-b pl-8 py-3">Carbs</td>
              <td className="border-b font-bold text-nutmeg py-3">0g</td>
            </tr>
            <tr>
              <td className="border-b pl-8 py-3">Protein</td>
              <td className="border-b font-bold text-nutmeg py-3">20g</td>
            </tr>
            <tr>
              <td className="pl-8 py-3">Fat</td>
              <td className="font-bold text-nutmeg py-3">22g</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
