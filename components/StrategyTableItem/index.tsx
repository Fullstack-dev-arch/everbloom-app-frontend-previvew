import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";

type Props = {
  name: string;
  apy: string;
  link: string;
  active?: boolean;
  low?: boolean;
  medium?: boolean;
  high?: boolean;
};

const StrategyTableItem = ({
  name,
  apy,
  link,
  active = false,
  low = false,
  medium = false,
  high = false,
}: Props) => {
  return (
    <div className={styles.strategies__table_item}>
      <Link
        href={link}
        className={`${basic.body1} ${styles.strategies__table_item_link}`}
      >
        {name}
      </Link>
      <p className={`${basic.body1} hide`}>{apy}</p>
      <p
        className={`${basic.body1} ${styles.strategies__table_item_risk} ${
          low ? styles.low : ""
        } ${medium ? styles.medium : ""} ${high ? styles.high : ""}`}
      >
        {low && "Low"}
        {medium && "Medium"}
        {high && "High"}
      </p>
      <p
        className={`${basic.body1} ${active ? styles.active : styles.inactive}`}
      >
        {active ? "Active" : "Inactive"}
      </p>
      <div className={styles.strategies__asset}>
        <div className={styles.strategies__asset_currency}>
          <Image
            width="24"
            height="24"
            alt="currency"
            src="/img/bitcoin.svg"
            className={styles.strategies__asset_currency_icon}
          />

          <Image
            width="24"
            height="24"
            alt="currency"
            src="/img/eth.svg"
            className={styles.strategies__asset_currency_icon}
          />

          <Image
            width="24"
            height="24"
            alt="currency"
            src="/img/shiba.svg"
            className={styles.strategies__asset_currency_icon}
          />

          <Image
            width="24"
            height="24"
            alt="currency"
            src="/img/usd.svg"
            className={styles.strategies__asset_currency_icon}
          />
        </div>

        <p className={`${basic.body1} ${styles.strategies__asset_text}`}>
          wBTC, wETH, USDC and 5 more
        </p>
      </div>
    </div>
  );
};

export default StrategyTableItem;
