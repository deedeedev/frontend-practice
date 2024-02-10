import Image from "next/image"
import { Montserrat } from "next/font/google"
import { Fraunces } from "next/font/google"

import mobileProductImage from "./image-product-mobile.jpg"
import desktopProductImage from "./image-product-desktop.jpg"
import cartIcon from "./icon-cart.svg"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] })
const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"] })

export default function ProductPreviewCard() {
  return (
    <div
      className={`${montserrat.className} text-ppcDarkGrayishBlue container m-6 flex max-w-xl flex-col rounded-xl bg-white sm:flex-row`}
    >
      <picture>
        <source srcSet={desktopProductImage.src} media="(min-width: 640px)" />
        <Image
          src={mobileProductImage}
          alt="product image"
          className="rounded-t-xl sm:rounded-l-xl sm:rounded-r-none"
        />
      </picture>
      <div className="m-6 space-y-4">
        <p className="-mb-2 text-xs uppercase tracking-[.5em]">Perfume</p>
        <h1 className={`${fraunces.className} text-ppcVeryDarkBlue text-3xl`}>
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-sm">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-6">
          <div className={`${fraunces.className} text-ppcDarkCyan text-3xl`}>
            $149.99
          </div>
          <div className="text-sm line-through">$169.99</div>
        </div>
        <button className="bg-ppcDarkCyan hover:bg-ppcVeryDarkCyan flex w-full items-center justify-center gap-3 rounded-lg py-3 text-sm font-bold text-white">
          <Image src={cartIcon} alt="cart icon" aria-hidden />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
