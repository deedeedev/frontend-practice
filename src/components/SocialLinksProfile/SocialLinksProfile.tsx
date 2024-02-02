import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

import avatarImg from "./avatar-jessica.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function SocialLinksProfile() {
  return (
    <main
      className={`${inter.className} flex flex-col items-center space-y-6 text-white rounded-lg bg-slpDarkGray p-6 sm:p-8 sm:min-w-[350px]`}
    >
      {/* Avatar */}
      <div>
        <Image src={avatarImg} alt="avatar" className="w-24 h-24 rounded-full" />
      </div>
      {/* Name & Location */}
      <div className="text-center">
        <h1 className="text-3xl tracking-tight">Jessica Randall</h1>
        <h2 className="font-bold text-slpGreen">London, United Kingdom</h2>
      </div>
      {/* Description */}
      <p className="text-sm">&ldquo;Front-end developer and avid reader.&rdquo;</p>
      {/* Links */}
      <div className="w-full flex flex-col gap-3 text-sm">
        <Link
          href={""}
          className="text-center bg-slpGray rounded-lg py-3 font-bold hover:text-slpDarkGray hover:bg-slpGreen"
        >
          Github
        </Link>
        <Link
          href={""}
          className="text-center bg-slpGray rounded-lg py-3 font-bold hover:text-slpDarkGray hover:bg-slpGreen"
        >
          Frontend Mentor
        </Link>
        <Link
          href={""}
          className="text-center bg-slpGray rounded-lg py-3 font-bold hover:text-slpDarkGray hover:bg-slpGreen"
        >
          Linkedin
        </Link>
        <Link
          href={""}
          className="text-center bg-slpGray rounded-lg py-3 font-bold hover:text-slpDarkGray hover:bg-slpGreen"
        >
          Twitter
        </Link>
        <Link
          href={""}
          className="text-center bg-slpGray rounded-lg py-3 font-bold hover:text-slpDarkGray hover:bg-slpGreen"
        >
          Instagram
        </Link>
      </div>
    </main>
  );
}
