import Image from "next/image";

import basic from "./index.module.css";

type Props = {
  text: string;
  withIcon?: boolean;
  icon?: string;
  disable?: boolean;
  onClick?: any;
};

const ButtonOutfilled = ({
  text,
  withIcon = false,
  icon = "",
  disable = false,
  onClick = () => {},
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${basic.button__outfilled} ${disable ? basic.disable : ""}`}
    >
      {withIcon && <Image src={icon} alt="icon" width={18} height={18} />}

      {text}
    </button>
  );
};

export default ButtonOutfilled;
