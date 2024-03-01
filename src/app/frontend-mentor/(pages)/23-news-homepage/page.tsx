import Image from "next/image"
import { Inter } from "next/font/google"
import DesktopMenu from "@/components/NewsHomepage/DesktopMenu/DesktopMenu"
import MobileMenu from "@/components/NewsHomepage/MobileMenu/MobileMenu"
import ArticleItem from "@/components/NewsHomepage/ArticleItem/ArticleItem"
import MostViewedItem from "@/components/NewsHomepage/MostViewedItem/MostViewedItem"
import NewArticleItem from "@/components/NewsHomepage/NewArticleItem/NewArticleItem"

import type { Metadata } from "next"

import logoImg from "./logo.svg"
import data from "./data"

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "800"] })

export const metadata: Metadata = {
  title: "Frontend Mentor: News Homepage",
  description: "My solution to the News Homepage challenge on Frontend Mentor",
  icons: "/23-news-homepage/favicon-32x32.png",
}

export default function Page() {
  return (
    <div
      className={`${inter.className} w-full text-[calc(15rem/16)] text-nhDarkGrayishBlue`}
    >
      <div className="lg:pt-26 mx-auto flex max-w-[calc(1110rem/16)] flex-col gap-8 px-4 pb-12 pt-6 sm:pt-20 lg:gap-12">
        <header className="flex items-center justify-between sm:col-span-2">
          <Image
            src={logoImg}
            alt="logo"
            className="h-[28px] w-auto sm:h-[40px]"
          />
          <div className="sm:hidden">
            <MobileMenu items={data.menuItems} />
          </div>
          <div className="hidden sm:block">
            <DesktopMenu items={data.menuItems} />
          </div>
        </header>
        <main className="grid gap-16 md:grid-cols-3 md:gap-x-4 md:gap-y-8 lg:gap-x-8 lg:gap-y-14">
          {/* Article */}
          <ArticleItem {...data.article} />
          {/* New */}
          <section>
            <div className="h-full bg-nhVeryDarkBlue p-5">
              <h1 className="mb-1 text-3xl font-bold text-nhSoftOrange">New</h1>
              {data.newArticles.map((item, idx) => (
                <NewArticleItem
                  {...item}
                  isLast={idx === data.newArticles.length - 1}
                  key={idx}
                />
              ))}
            </div>
          </section>
          {/* Most Viewed */}
          <section className="grid gap-4 md:col-span-3 md:grid-cols-subgrid lg:gap-8">
            {data.mostViewed.map((item, idx) => (
              <MostViewedItem {...item} idx={idx + 1} key={idx} />
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}
