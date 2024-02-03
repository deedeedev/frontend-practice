import Image from "next/image";
import Link from "next/link";
import { Figtree } from "next/font/google";

import illustrationImg from "./illustration-article.svg";
import avatarImg from "./image-avatar.webp";

const figtree = Figtree({ weight: ["600", "800"], subsets: ["latin"] });

export default function BlogPreviewCard() {
  return (
    <div
      className={`${figtree.className} max-w-sm flex flex-col mx-6 p-7 rounded-3xl border border-solid border-black shadow-[8px_8px] bg-bpcWhite text-bpcBlack`}
    >
      <Image src={illustrationImg} alt="illustration" className="rounded-xl" />
      {/* Tag */}
      <div className="self-start mt-7 bg-bpcYellow px-3.5 py-1.5 rounded text-sm font-bold">Learning</div>
      {/* Date */}
      <p className="mt-4 text-xs font-thin">Published 21 Dec 2023</p>
      {/* Title */}
      <Link href="#" className="mt-5 text-xl font-bold hover:text-bpcYellow">
        HTML & CSS foundations
      </Link>
      <p className="mt-5 text-sm text-bpcGray font-thin">
        These languages are the backbone of every website, defining structure, content, and presentation.
      </p>
      {/* Author */}
      <div className="mt-6 flex justify-start items-center gap-3">
        {/* Avatar */}
        <Image src={avatarImg} alt="avatar" className="w-8 h-8" />
        {/* Name */}
        <div className="text-sm font-bold">Greg Hooper</div>
      </div>
    </div>
  );
}
