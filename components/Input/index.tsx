import styles from "./index.module.css";

type Props = {
  errorMes?: string;
  placeholder?: string;
  error?: boolean;
  disable?: boolean;
  value: string;
  setValue: any;
};

const Input = ({
  errorMes = "Error",
  placeholder = "",
  error = false,
  disable = false,
  value,
  setValue,
}: Props) => {
  return (
    <div
      className={`${styles.input__inner} ${error ? styles.error : ""} ${
        disable ? styles.disable : ""
      }`}
    >
      <input
        type="email"
        value={value}
        placeholder={placeholder}
        className={styles.input__value}
        onChange={(e) => setValue(e.target.value)}
      />

      {error && <p className={styles.input__error}>{errorMes}</p>}
    </div>
  );
};

export default Input;
