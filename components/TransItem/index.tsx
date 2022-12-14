import Image from "next/image";

import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";

import Dots from "@/components/icons/Dots";
import ButtonOutline from "@/components/ButtonOutline";

type Props = {
  value: string;
  event: string;
  hash: string;
  date: string;
  negative?: boolean;
  copyText: string;
};

const TransItem = ({
  value,
  event,
  hash,
  date,
  negative = false,
  copyText,
}: Props) => {
  const copy = () => {
    navigator.clipboard.writeText(copyText);
  };

  return (
    <div className={styles.vault__table_item}>
      <p
        className={`${styles.item} ${basic.body1} ${
          negative ? styles.minus : styles.plus
        }`}
      >
        {negative ? "-" : "+"} {value}
      </p>
      <p className={`${styles.item} ${basic.body1}`}>{event}</p>
      <div
        className={`${styles.item} ${basic.body1} ${styles.vault__trans} hide`}
      >
        {hash}
        <Image
          width={24}
          height={24}
          alt="Copy"
          src="/img/copy.svg"
          onClick={copy}
        />
      </div>
      <p className={`${styles.item} ${basic.body1}`}>{date}</p>

      <div className={styles.main__content_item_dots}>
        <Dots
          className={styles.main__content_item_dots_icon}
          width="3"
          height="15"
        />

        <div className={styles.main__content_item_dots_drop}>
          <div className={styles.main__content_item_dots_drop_item}>
            <ButtonOutline text="Info" info />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransItem;
