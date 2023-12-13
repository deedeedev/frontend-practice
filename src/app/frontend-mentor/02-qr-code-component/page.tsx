import Image from "next/image";
import { Outfit } from "next/font/google";

import styles from "./styles.module.css";
import qrCodeImage from "./image-qr-code.png";

const outfitFont = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <div className={[styles.main, outfitFont.className].join(" ")}>
      <div className={styles.container}>
        <Image src={qrCodeImage} className={styles.qrcode} alt="" />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Improve your front-end skills by building projects</h1>
          <p className={styles.text}>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
