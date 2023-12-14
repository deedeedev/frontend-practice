import Image, { StaticImageData } from "next/image";
import { Outfit } from "next/font/google";

import styles from "./styles.module.css";

interface Props {
  image: StaticImageData;
}

const outfitFont = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function QRCode({ image }: Props) {
  return (
    <div className={[styles.container, outfitFont.className].join(" ")}>
      <Image src={image} className={styles.qrcode} alt="" />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Improve your front-end skills by building projects</h1>
        <p className={styles.text}>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
}
