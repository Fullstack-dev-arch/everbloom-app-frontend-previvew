import Image from "next/image";

import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";

type Props = {
  currency: string;
  icon: string;
  connected?: boolean;
};

const NetworkItem = ({ currency, icon, connected = false }: Props) => {
  return (
    <div className={styles.modal__network_item}>
      <div className={`${styles.modal__network_item_box} ${basic.button1}`}>
        <Image src={icon} alt="eth" width={24} height={24} />
        {currency}
      </div>

      {connected && (
        <p className={`${styles.connected} ${basic.caption}`}>Connected</p>
      )}
    </div>
  );
};

export default NetworkItem;
