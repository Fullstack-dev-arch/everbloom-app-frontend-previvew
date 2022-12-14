import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

type Props = {
  active?: boolean;
  close: any;
};

const MobileMenu = ({ active = false, close }: Props) => {
  return (
    <div className={`${styles.mobile__menu} ${active ? styles.active : ""}`}>
      <div className={styles.mobile__menu_content}>
        <div className={styles.mobile__menu_wrap}>
          <div className={styles.mobile__menu_logo_wrap}>
            <Image
              src="/img/logo-white.svg"
              alt="logo"
              width={128}
              height={25}
            />

            <Image
              src="/img/cross-white.svg"
              alt="cross"
              width={30}
              height={30}
              onClick={close}
            />
          </div>

          <div className={styles.mobile__menu_nav}>
            <Link
              href="/"
              onClick={close}
              className={styles.mobile__menu_nav_link}
            >
              Home
            </Link>

            <Link
              href="/vaults"
              onClick={close}
              className={styles.mobile__menu_nav_link}
            >
              Vaults
            </Link>

            <Link
              href="/strategies"
              onClick={close}
              className={styles.mobile__menu_nav_link}
            >
              Strategies
            </Link>
          </div>
        </div>

        <div className={styles.mobile__menu_wrap}>
          <button className={styles.mobile__menu_connect_button}>
            <Image
              src="/img/wallet-black.svg"
              alt="wallet"
              width={20}
              height={20}
              onClick={close}
            />
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
