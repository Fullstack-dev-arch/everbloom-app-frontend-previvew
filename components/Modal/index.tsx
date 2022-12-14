import Image from "next/image";

import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ProviderItem from "@/components/ProviderItem";
import useEscapeKey from "@/hooks/useEscapeKey";
import {
  METAMASK_WALLET,
  WALLETCONNECT_WALLET,
  WALLET_TYPE,
} from "@/libs/constants";
import { useEffect, useState } from "react";
import { isValidEmail } from "@/libs/utils";
import { useAuthValue } from "@/contexts/AuthContext";
import useWalletConnection from "@/hooks/useWalletConnection";
import Link from "next/link";

type Props = {
  close: any;
};

const Modal = ({ close }: Props) => {
  useEscapeKey(close);

  const { isSignedIn, walletType, changeWalletType, signIn } = useAuthValue();
  const { active, connectWallet } = useWalletConnection();

  const [email, setEmail] = useState<string>("");
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);

  useEffect(() => {
    setIsErrorEmail(!isValidEmail(email));
  }, [email]);

  useEffect(() => {
    if (isSignedIn) {
      close();
    }
  }, [isSignedIn]);

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

          <p className={basic.h1}>Connect to Everbloom</p>

          <div className={styles.modal__textblock_wrap}>
            <div className={styles.modal__textblock}>
              <span>
                The full experience requires an Ethereum ERC-20 wallet.
              </span>{" "}
              It will open your browser wallet plugin so you can connect with
              our decentralised platform. If you don&rsquo;t have a wallet yet
              or need more info, please <a href="#">read this first.</a>
            </div>
          </div>

          <p className={styles.modal__text}>Choose a wallet provider:</p>

          <div className={styles.modal__provider}>
            <ProviderItem
              isActive={walletType == WALLET_TYPE.METAMASK}
              onClick={() => changeWalletType(WALLET_TYPE.METAMASK)}
              text="Metamask"
              img="/img/metamask.svg"
            />
            <ProviderItem
              isActive={walletType == WALLET_TYPE.WALLETCONNECT}
              onClick={() => changeWalletType(WALLET_TYPE.WALLETCONNECT)}
              text="Wallet Connect"
              img="/img/walletConnect.svg"
            />
          </div>

          <p className={styles.modal__text}>
            Or login with your email address (read-only):
          </p>

          <div className={styles.modal__connect_wrap}>
            <Input
              value={email}
              setValue={setEmail}
              placeholder="Enter your email address..."
              error={isErrorEmail}
              errorMes="Please enter valid email."
            />

            <Button
              text="Connect"
              onClick={() => {
                connectWallet(
                  walletType == WALLET_TYPE.METAMASK
                    ? METAMASK_WALLET
                    : WALLETCONNECT_WALLET
                );
                signIn(email);
              }}
            />
          </div>

          <div className={styles.modal__text_inner}>
            <p className={styles.modal__text_agree}>
              By using one of login options you agree to our legal{" "}
              <Link
                href="https://everbloom.finance/terms-of-use"
                target="_blank"
              >
                Terms and Conditions.
              </Link>
            </p>

            <p className={styles.modal__text_sub}>
              Only verified customers can connect to Everbloom with their
              whitelisted wallet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
