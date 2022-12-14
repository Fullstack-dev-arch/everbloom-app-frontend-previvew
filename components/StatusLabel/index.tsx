import ReactTooltip from "react-tooltip";

import styles from "./index.module.css";

type Props = {
  text: string;
  since: string;
  alive?: boolean;
};

const StatusLabel = ({ text, since, alive = false }: Props) => {
  return (
    <div className={styles.container}>
      <ReactTooltip place="bottom" effect="float" />
      <button className={styles.label} data-tip={since}>
        {text}
      </button>
      <div
        className={`${styles.dot} ${alive ? styles.green : styles.yellow}`}
      ></div>
    </div>
  );
};

export default StatusLabel;
