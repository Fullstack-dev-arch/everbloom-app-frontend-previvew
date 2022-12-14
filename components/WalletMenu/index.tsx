import Image from "next/image";

import styles from "./index.module.css";

import ButtonOutfilled from "@/components/ButtonOutfilled";
import useEscapeKey from "@/hooks/useEscapeKey";
import {
  METAMASK_WALLET,
  WALLETCONNECT_WALLET,
  WALLET_TYPE,
} from "@/libs/constants";
import { useAuthValue } from "@/contexts/AuthContext";
import useWalletConnection from "@/hooks/useWalletConnection";
import { truncateAddress } from "@/libs/utils";

type Props = {
  close: any;
};

const WalletMenu = ({ close }: Props) => {
  useEscapeKey(close);

  const { email, walletType, signOut } = useAuthValue();
  const { active, account, connectWallet, disconnectWallet } =
    useWalletConnection();

  return (
    <div className={styles.container}>
      <div className={styles.triangle}></div>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <div className={styles.row}>
            <Image src="/img/mail.svg" width={19} height={19} alt="" />
            <span className={`${styles.email} ${styles.text}`}>
              {email ? email : "No email address"}
            </span>
          </div>
          <div className={styles.row}>
            <div className={styles.address}>
              <Image
                src="/img/wallet-black.svg"
                width={20}
                height={20}
                alt=""
              />
              <span className={styles.text}>{truncateAddress(account)}</span>
            </div>
            <div className={styles.connection}>
              <div
                className={`${styles.dot} ${
                  active ? styles.green : styles.red
                }`}
              ></div>
              <span className={styles.text}>
                {active ? "Connected" : "Disconnected"}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.block}>
          <div className={styles.row}>
            <div className={styles.buttonWrapper}>
              <ButtonOutfilled
                text={active ? "Disconnect" : "Connect"}
                withIcon
                icon={
                  walletType == WALLET_TYPE.METAMASK
                    ? "/img/metamask.svg"
                    : "/img/walletConnect.svg"
                }
                onClick={() => {
                  active
                    ? disconnectWallet()
                    : connectWallet(
                        walletType == WALLET_TYPE.METAMASK
                          ? METAMASK_WALLET
                          : WALLETCONNECT_WALLET
                      );
                }}
              />
            </div>
            <p className={styles.buttonLogout} onClick={() => signOut()}>
              Log out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletMenu;
