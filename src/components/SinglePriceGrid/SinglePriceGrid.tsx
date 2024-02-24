export default function SinglePriceGrid() {
  return (
    <div className="container mx-8 w-[310px] max-w-[635px] border sm:w-full">
      <div className="grid grid-cols-1 overflow-hidden rounded-lg sm:grid-cols-2">
        {/* Section 1 */}
        <div className="flex flex-col gap-4 bg-white p-6 sm:col-span-2 md:p-9">
          <h1 className="text-spgcCyan text-xl font-bold md:text-2xl">
            Join our community
          </h1>
          <p className="text-spgcBrightYellow font-bold md:text-[18px]">
            30-day, hassle-free money back guarantee
          </p>
          <p className="pb-2 text-sm leading-6 md:text-base">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        {/* Section 2 */}
        <div className="bg-spgcCyan flex flex-col gap-4 p-6 text-white md:p-9">
          <h1 className="text-[18px] font-bold">Monthly Subscription</h1>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <p className="text-3xl font-bold">$29</p>
              <p className="text-spgcLightGray opacity-70">per month</p>
            </div>
            <div className="text-[16px]">
              Full access for less than $1 a day
            </div>
          </div>
          <button className="bg-spgcBrightYellow rounded py-3 font-bold shadow-xl">
            Sign Up
          </button>
        </div>
        {/* Section 3 */}
        <div className="bg-spgcLightCyan flex flex-col gap-4 p-6 text-white md:p-9">
          <h1 className="text-[18px] font-bold">Why Us</h1>
          <ul className="text-[14px] leading-5 opacity-80">
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
