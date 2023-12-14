import Image, { StaticImageData } from "next/image";
import localFont from "next/font/local";

import styles from "./styles.module.css";
import data from "./data.json";

import memoryIcon from "./icon-memory.svg";
import reactionIcon from "./icon-reaction.svg";
import verbalIcon from "./icon-verbal.svg";
import visualIcon from "./icon-visual.svg";

interface IconType {
  [key: string]: StaticImageData;
}

const icons: IconType = {
  Reaction: reactionIcon,
  Memory: memoryIcon,
  Verbal: verbalIcon,
  Visual: visualIcon,
};

const myFont = localFont({
  src: "./HankenGrotesk-VariableFont_wght.ttf",
  display: "swap",
});

export default function Page() {
  return (
    <div className={[styles.container, myFont.className].join(" ")}>
      <section className={styles.result}>
        <h1 className={styles.title}>Your Result</h1>
        <div className={styles.score}>
          <p className={styles.number}>76</p>
          <p className={styles.total}>of 100</p>
        </div>
        <h1 className={styles.greeting}>Great</h1>
        <p className={styles["greeting-message"]}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
      <section className={styles.summary}>
        <h1 className={styles.title}>Summary</h1>
        <div className={styles.break}>
          {data.map((item) => (
            <div
              className={[styles["break-item"], styles[`break-item-${item.category.toLowerCase()}`]].join(" ")}
              key={item.category}
            >
              <Image src={icons[item.category]} alt="" />
              <p className={styles["break-item-name"]}>{item.category}</p>
              <p className={styles["break-item-score"]}>{item.score}</p>
              <p className={styles["break-item-total"]}>&nbsp;&nbsp;/ 100</p>
            </div>
          ))}
        </div>
        <button className={styles.button}>Continue</button>
      </section>
    </div>
  );
}
