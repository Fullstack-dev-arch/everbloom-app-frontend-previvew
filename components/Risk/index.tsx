import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";

type Props = {
  riskTitle: string;
  riskValue: string;
  vaultTitle: string;
  vaultValue: string;
  low?: boolean;
  medium?: boolean;
  high?: boolean;
  blue?: boolean;
};

const Risk = ({
  riskTitle,
  riskValue,
  vaultTitle,
  vaultValue,
  low = false,
  medium = false,
  high = false,
  blue = false,
}: Props) => {
  return (
    <div className={styles.main__balance_inner_wrap}>
      <div className={styles.main__balance_inner}>
        <div className={styles.main__balance_item}>
          <p className={basic.body2}>{riskTitle}</p>

          <p
            className={`${basic.medium} ${basic.values} ${
              low ? styles.low : ""
            } ${medium ? styles.medium : ""} ${high ? styles.high : ""} ${
              blue ? styles.blue : ""
            } hide`}
          >
            {riskValue}
          </p>
        </div>

        <div className={styles.main__balance_item}>
          <p className={basic.body2}>{vaultTitle}</p>

          <p className={`${basic.values} ${blue ? styles.blue : ""} hide`}>
            {vaultValue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Risk;
