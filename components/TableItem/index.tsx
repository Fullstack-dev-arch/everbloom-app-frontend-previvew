import Link from "next/link";
import Image from "next/image";
import ReactTooltip from "react-tooltip";

import styles from "./index.module.css";
import basic from "@/styles/Basic.module.css";

import ButtonOutline from "@/components/ButtonOutline";
import Dots from "@/components/icons/Dots";
import ModalCurrency from "@/components/ModalCurrency";
import ModalWithdraw from "@/components/ModalWithdraw";
import ModalDeposit from "@/components/ModalDeposit";
import { useState } from "react";

type Props = {
  currency: string;
  icon: string;
  asset: string;
  myassets: string;
  value: string;
  apy: string;
};

const TableItem = ({ currency, icon, asset, myassets, value, apy }: Props) => {
  const [isCurrencyModalOpen, setIsCurrencyModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  return (
    <div className={styles.main__content_item_values}>
      <ReactTooltip place="bottom" effect="float" />

      <div
        className={`${styles.main__content_item_value} ${styles.main__content_item_currency} ${basic.body1}`}
      >
        <Image
          className={styles.main__content_item_icon}
          src={icon}
          alt="crypto"
          width={24}
          height={24}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />

        <Link href="/vaults">{currency}</Link>
      </div>

      <p className={`${styles.main__content_item_value} ${basic.body1}`}>
        {asset}
      </p>

      <p
        className={`${styles.main__content_item_value_light} ${basic.body1} hide`}
      >
        {myassets}
      </p>

      <p
        data-tip="1 ETH = $1.366,90"
        className={`${styles.main__content_item_value_light} ${basic.body1} hide`}
      >
        {value}
      </p>

      <p className={`${styles.main__content_item_value} ${basic.body1}`}>
        {apy}
      </p>

      <div
        className={`${styles.main__content_item_value} ${styles.main__content_item_buttons}`}
      >
        <ButtonOutline
          text="Info"
          info
          onClick={() => setIsCurrencyModalOpen(true)}
        />
        <ButtonOutline
          text="Deposit"
          deposit
          onClick={() => setIsDepositModalOpen(true)}
        />
        <ButtonOutline
          text="Withdraw"
          withdraw
          onClick={() => setIsWithdrawModalOpen(true)}
        />
      </div>

      <div className={styles.main__content_item_dots}>
        <Dots
          className={styles.main__content_item_dots_icon}
          width="3"
          height="15"
        />

        <div className={styles.main__content_item_dots_drop}>
          <div className={styles.main__content_item_dots_drop_item}>
            <ButtonOutline
              text="Info"
              info
              onClick={() => setIsCurrencyModalOpen(true)}
            />
          </div>

          <div className={styles.main__content_item_dots_drop_item}>
            <ButtonOutline
              text="Deposit"
              deposit
              onClick={() => setIsDepositModalOpen(true)}
            />
          </div>

          <div className={styles.main__content_item_dots_drop_item}>
            <ButtonOutline
              text="Withdraw"
              withdraw
              onClick={() => setIsWithdrawModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {isCurrencyModalOpen && (
        <ModalCurrency close={() => setIsCurrencyModalOpen(false)} />
      )}
      {isWithdrawModalOpen && (
        <ModalWithdraw close={() => setIsWithdrawModalOpen(false)} />
      )}
      {isDepositModalOpen && (
        <ModalDeposit close={() => setIsDepositModalOpen(false)} />
      )}
    </div>
  );
};

export default TableItem;
