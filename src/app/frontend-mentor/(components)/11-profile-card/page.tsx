import ProfileCard from "@/components/ProfileCard/ProfileCard"

export default function Page() {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-pcDarkCyan"
      style={{
        backgroundImage:
          "url('/11-profile-card/bg-pattern-top.svg'), url('/11-profile-card/bg-pattern-bottom.svg')",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "right 52vw bottom 35vh, left 48vw top 52vh",
      }}
    >
      <ProfileCard />
    </div>
  )
}
