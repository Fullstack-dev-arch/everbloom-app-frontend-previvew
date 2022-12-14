import Image from "next/image";

import styles from "./index.module.css";

type Props = {
  text: string;
  withIcon?: boolean;
  icon?: string;
  disable?: boolean;
  onClick?: any;
};

const Button = ({
  text,
  withIcon = false,
  icon = "",
  disable = false,
  onClick = () => {},
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles.button1} ${
        disable ? styles.disable : ""
      }`}
    >
      {withIcon && (
        <Image
          className={styles.button__icon}
          src={icon}
          alt="icon"
          width={18}
          height={18}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      )}

      {text}
    </button>
  );
};

export default Button;
