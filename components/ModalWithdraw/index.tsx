import Image from "next/image";

import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";

import Notify from "@/components/Notify";
import Input from "@/components/Input";
import Button from "@/components/Button";
import ButtonOutfilled from "@/components/ButtonOutfilled";
import useEscapeKey from "@/hooks/useEscapeKey";
import useWalletConnection from "@/hooks/useWalletConnection";
import { truncateAddress } from "@/libs/utils";

type Props = {
  close: any;
};

const ModalWithdraw = ({ close }: Props) => {
  useEscapeKey(close);

  const { account } = useWalletConnection();

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

          <div className={styles.modal__currency_title_inner}>
            <Image
              src="/img/arrow-modal.svg"
              alt="Bitcoin"
              width={36}
              height={36}
            />

            <p className={basic.h1}>Ethereum (wETH)</p>

            <p className={`${basic.h1} ${styles.modal__currency_subtitle}`}>
              withdrawal
            </p>
          </div>

          <p className={basic.body2}>
            Withdraw funds from your wallet to the Everbloom BTC Vault
          </p>

          <Notify
            text="Warning! wETH withdrawals are currently disabled due to Everbloom scheduled maintenance. Please try again after 7 October 2023 11:00:00 UTC. We apologize for the inconvenience."
            warn
            cross={false}
          />

          <div className={styles.amount__wrap}>
            <p className={styles.modal__text}>Amount</p>

            <div className={styles.modal__connect_wrap}>
              <Input
                value=""
                setValue={() => {}}
                placeholder="Enter withdraw amount"
              />

              <Button text="Withdraw" />
            </div>
          </div>

          <div className={styles.amount__wrap}>
            <p className={styles.modal__text}>
              Or choose a percentage of your Vault position:
            </p>

            <div className={styles.amount__buttons}>
              <button className={styles.amount__button}>25%</button>

              <button className={styles.amount__button}>50%</button>

              <button className={styles.amount__button}>75%</button>

              <button className={styles.amount__button}>100%</button>
            </div>
          </div>

          <div className={styles.amount__balance_inner}>
            <div className={styles.amount__balance_item}>
              <p className={basic.body2}>Your Vault position</p>

              <p className={basic.values}>103,3 wETH</p>
            </div>

            <div className={styles.amount__balance_item}>
              <p className={basic.body2}>Your wallet balance</p>

              <p className={basic.values}>0,00 wETH</p>
            </div>

            <div className={styles.amount__balance_risk_wrap}>
              <div className={styles.amount__balance_risk}>
                <div className={styles.amount__balance_risk_item}>
                  <p className={basic.body2}>Vault Risk:</p>
                  <p className={basic.body1}>High</p>
                </div>

                <div className={styles.amount__balance_risk_item}>
                  <p className={basic.body2}>Vault APY:</p>
                  <p className={basic.body1}>4.56%</p>
                </div>
              </div>
            </div>
          </div>

          <ButtonOutfilled
            text={`Connected to ${truncateAddress(account)}`}
            withIcon
            icon="/img/wallet-black.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalWithdraw;
