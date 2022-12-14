import style from "./index.module.css";
import basic from "@/styles/Basic.module.css";

import Info from "@/components/icons/Info";
import ArrowDown from "@/components/icons/ArrowDown";
import ArrowUp from "@/components/icons/ArrowUp";

type Props = {
  text: string;
  info?: boolean;
  deposit?: boolean;
  withdraw?: boolean;
  onClick?: any;
};

const ButtonOutline = ({
  text,
  info = false,
  deposit = false,
  withdraw = false,
  onClick = () => {},
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${style.button__outline} ${basic.body1}`}
    >
      {info && (
        <Info className={style.button__outline_icon} width="16" height="16" />
      )}

      {deposit && (
        <ArrowDown
          className={style.button__outline_icon_fill}
          width="16"
          height="16"
        />
      )}

      {withdraw && (
        <ArrowUp
          className={style.button__outline_icon_fill}
          width="16"
          height="16"
        />
      )}
      {text}
    </button>
  );
};

export default ButtonOutline;
