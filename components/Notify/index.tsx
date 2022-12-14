import styles from "./index.module.css";
import Cross from "@/components/icons/Cross";
import Success from "@/components/icons/Success";
import Error from "@/components/icons/Error";
import Warn from "@/components/icons/Warn";

type Props = {
  text: string;
  success?: boolean;
  error?: boolean;
  warn?: boolean;
  cross?: boolean;
};

const Notify = ({
  text,
  success = false,
  error = false,
  warn = false,
  cross = true,
}: Props) => {
  return (
    <div
      className={`${styles.notify} ${success ? styles.success : ""} ${
        error ? styles.error : ""
      } ${warn ? styles.warn : ""}`}
    >
      <div className={styles.notify__content}>
        {success && <Success width="30" height="30" />}
        {error && <Error width="30" height="30" />}
        {warn && <Warn width="30" height="30" />}

        <p className={styles.notify__text}>{text}</p>

        {cross && <Cross width="20" height="20" />}
      </div>
    </div>
  );
};

export default Notify;
