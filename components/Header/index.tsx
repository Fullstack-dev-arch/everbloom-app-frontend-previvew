import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import basic from "@/styles/Basic.module.css";
import styles from "./index.module.css";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import ModalNetwork from "@/components/ModalNetwork";
import ButtonOutfilled from "@/components/ButtonOutfilled";
import MobileMenu from "@/components/MobileMenu";
import WalletMenu from "@/components/WalletMenu";
import { useAuthValue } from "@/contexts/AuthContext";

const Header = () => {
  const { pathname } = useRouter();
  const { isSignedIn, email } = useAuthValue();

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletMenuOpen, setIsWalletMenuOpen] = useState(false);

  const hideCurrency = () => {
    let body = document.body.classList;
    if (!body.contains("blur")) {
      body.add("blur");
      setIsHidden(true);
    } else {
      body.remove("blur");
      setIsHidden(false);
    }
  };

  useEffect(() => {
    setIsWalletMenuOpen(false);
  }, [isSignedIn]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        <title>Everbloom</title>
      </Head>

      {isSignInModalOpen && <Modal close={() => setIsSignInModalOpen(false)} />}
      {isNetworkModalOpen && (
        <ModalNetwork close={() => setIsNetworkModalOpen(false)} />
      )}

      <MobileMenu active={isMenuOpen} close={() => setIsMenuOpen(false)} />

      <header className={styles.header}>
        <div className={basic.container}>
          <div className={styles.header__inner}>
            <div className={styles.header__wrapper}>
              <Link href="/" className={styles.header__logo}>
                <Image
                  src="/img/logo.svg"
                  alt="Logo"
                  width={154}
                  height={30}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>

              <nav className={styles.header__nav}>
                <div className={styles.header__nav_wrap}>
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? styles.header__nav_link_active
                        : styles.header__nav_link
                    }
                  >
                    Home
                  </Link>
                </div>

                <div className={styles.header__nav_wrap}>
                  <Link
                    href="/vaults"
                    className={
                      pathname === "/vaults"
                        ? styles.header__nav_link_active
                        : styles.header__nav_link
                    }
                  >
                    Vaults
                  </Link>

                  <div className={styles.header__nav_drop}>
                    <Link
                      href="/vaults"
                      className={`${styles.header__nav_drop_link} ${basic.body1}`}
                    >
                      <Image
                        src="/img/bitcoin.svg"
                        alt="currency"
                        width={24}
                        height={24}
                      />
                      Bitcoin
                    </Link>

                    <button
                      className={`${styles.header__nav_drop_link} ${basic.body1}`}
                    >
                      <Image
                        src="/img/eth.svg"
                        alt="currency"
                        width={24}
                        height={24}
                      />
                      Ethereum
                    </button>

                    <button
                      className={`${styles.header__nav_drop_link} ${basic.body1}`}
                    >
                      <Image
                        src="/img/usd.svg"
                        alt="currency"
                        width={24}
                        height={24}
                      />
                      USD Coin
                    </button>

                    <button
                      className={`${styles.header__nav_drop_link} ${basic.body1}`}
                    >
                      <Image
                        src="/img/shiba.svg"
                        alt="currency"
                        width={24}
                        height={24}
                      />
                      Shiba Inu
                    </button>
                  </div>
                </div>

                {/* <Link
                    href="/strategies"
                    className={
                        pathname === "/strategies"
                            ? styles.header__nav_link_active
                            : styles.header__nav_link
                    }
                >
                  Strategies
                </Link> */}
              </nav>
            </div>

            {isSignedIn ? (
              <>
                <div className={styles.header__profile_wrap}>
                  <button className={styles.header__profile_hide}>
                    {isHidden ? (
                      <Image
                        src="/img/closed-eye.svg"
                        alt="eye"
                        width={22}
                        height={22}
                        onClick={hideCurrency}
                      />
                    ) : (
                      <Image
                        src="/img/open-eye.svg"
                        alt="eye"
                        width={22}
                        height={22}
                        onClick={hideCurrency}
                      />
                    )}
                  </button>

                  <ButtonOutfilled
                    text="Ethereum"
                    withIcon
                    icon="/img/eth.svg"
                    onClick={() => setIsNetworkModalOpen(true)}
                  />

                  <Button
                    text={email ? email.split("@")[0] : "Unknown User"}
                    withIcon
                    icon="/img/user-lock.svg"
                    onClick={() => setIsWalletMenuOpen(!isWalletMenuOpen)}
                  />
                  {isWalletMenuOpen && (
                    <WalletMenu close={() => setIsWalletMenuOpen(false)} />
                  )}
                </div>

                <div className={styles.header__profile_wrap_mobile}>
                  <Button
                    text=""
                    withIcon
                    icon="/img/wallet.svg"
                    onClick={() => setIsWalletMenuOpen(!isWalletMenuOpen)}
                  />

                  {isWalletMenuOpen && (
                    <WalletMenu close={() => setIsWalletMenuOpen(false)} />
                  )}

                  <button className={styles.header__menu_button}>
                    <Image
                      src="/img/menu.svg"
                      alt="menu"
                      width={24}
                      height={24}
                      onClick={() => setIsMenuOpen(true)}
                    />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={styles.header__profile_wrap}>
                  <Button
                    onClick={() => {
                      setIsSignInModalOpen(true);
                    }}
                    text="Connect"
                    withIcon
                    icon="/img/wallet.svg"
                  />
                </div>

                <div className={styles.header__profile_wrap_mobile}>
                  <Button
                    text=""
                    onClick={() => {
                      setIsSignInModalOpen(true);
                    }}
                    withIcon
                    icon="/img/wallet.svg"
                  />

                  <button className={styles.header__menu_button}>
                    <Image
                      src="/img/menu.svg"
                      alt="menu"
                      width={24}
                      height={24}
                      onClick={() => setIsMenuOpen(true)}
                    />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
