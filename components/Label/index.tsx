import Link from "next/link";

import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";
import { STRATEGIES } from "@/libs/constants";

type Props = {
  index: STRATEGIES;
  graphIndexes: Array<number>;
  text: string;
  procent: string;
  id: string;
  link?: string;
  risk?: string;
  status?: string;
  changeGraph?: any;
  details?: boolean;
};

const Label = ({
  index,
  graphIndexes,
  text,
  procent,
  id,
  link = "",
  risk = "",
  status = "",
  changeGraph = () => {},
  details = true,
}: Props) => {
  return (
    <div className={styles.strategy__item}>
      <input
        type="checkbox"
        id={id}
        className={styles.strategy__item_input}
        checked={graphIndexes.includes(index)}
        onChange={(e) => changeGraph(index, e.target.checked)}
      />

      <label
        className={`${styles.stra__item_name} ${styles.strategy__item_label} ${
          index == STRATEGIES.MAKER
            ? styles.maker
            : index == STRATEGIES.FRAX_3CRV
            ? styles.frax3Crv
            : styles.gmxDeltaNeutral
        }`}
        htmlFor={id}
      >
        {link ? <Link href={link}>{text}</Link> : text}
      </label>

      <p className={`${styles.stra__item_yield} ${basic.caption}`}>{procent}</p>

      {details && risk && (
        <p className={`${styles.stra__item_risk} ${basic.caption}`}>{risk}</p>
      )}

      {details && status && (
        <p
          className={`${styles.stra__item_status} ${basic.caption} ${
            status === "Active" ? styles.active : styles.inactive
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default Label;
