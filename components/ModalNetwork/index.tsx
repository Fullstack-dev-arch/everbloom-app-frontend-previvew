import Image from "next/image";

import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";

import NetworkItem from "@/components/NetworkItem";
import useEscapeKey from "@/hooks/useEscapeKey";
import useWalletConnection from "@/hooks/useWalletConnection";

type Props = {
  close: any;
};

const ModalNetwork = ({ close }: Props) => {
  useEscapeKey(close);

  const { active } = useWalletConnection();

  return (
    <div className={styles.modal}>
      <div className={styles.modal__inner}>
        <div className={styles.modal__content}>
          <Image
            src="/img/cross.svg"
            alt="close"
            width={22}
            height={22}
            className={styles.modal__cross}
            onClick={close}
          />

          <p className={basic.h1}>Switch Network</p>

          <div className={styles.modal__network_content}>
            <NetworkItem
              currency="Ethereum"
              icon="/img/eth.svg"
              connected={active}
            />

            {/* <NetworkItem currency="Avalanche" icon="/img/eth.svg" /> */}
          </div>

          <p className={styles.modal__annotation}>
            More networks will be added in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalNetwork;
