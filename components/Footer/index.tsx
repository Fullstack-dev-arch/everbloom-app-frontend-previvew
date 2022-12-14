import Image from "next/image";
import Link from "next/link";

import basic from "@/styles/Basic.module.css";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={basic.container}>
        <div className={styles.footer__inner}>
          <p className={`${basic.caption} ${styles.footer__copy}`}>
            {new Date().getUTCFullYear()} Everbloom
          </p>

          <div className={styles.footer__wrapper}>
            <div className={styles.footer__nav}>
              <Link
                className={`${styles.footer__nav_link} ${basic.caption}`}
                href="https://everbloom.finance/"
                target="_blank"
              >
                Home
              </Link>
              <Link
                className={`${styles.footer__nav_link} ${basic.caption}`}
                href="https://everbloom.finance/about"
                target="_blank"
              >
                About
              </Link>
              <Link
                className={`${styles.footer__nav_link} ${basic.caption}`}
                href="https://everbloom.finance/company"
                target="_blank"
              >
                Company
              </Link>
              <Link
                className={`${styles.footer__nav_link} ${basic.caption}`}
                href="https://everbloom.finance/faq"
                target="_blank"
              >
                Faq
              </Link>
              <Link
                className={`${styles.footer__nav_link} ${basic.caption}`}
                href="https://everbloom.finance/blog"
                target="_blank"
              >
                Blog
              </Link>
              <Link
                className={`${styles.footer__nav_link} ${basic.caption}`}
                href="https://everbloom.finance/contact"
                target="_blank"
              >
                Contact
              </Link>
            </div>

            <div className={styles.footer__agree_wrapper}>
              <Link
                className={`${styles.footer__agree_link} ${basic.caption}`}
                href="https://everbloom.finance/privacy-policy"
                target="_blank"
              >
                Privacy Policy
              </Link>
              <Link
                className={`${styles.footer__agree_link} ${basic.caption}`}
                href="https://everbloom.finance/terms-of-use"
                target="_blank"
              >
                Terms & Conditions
              </Link>
              <Link
                className={`${styles.footer__agree_link} ${basic.caption}`}
                href="https://everbloom.finance/cookie-policy"
                target="_blank"
              >
                Cookies
              </Link>
            </div>
          </div>

          <button className={styles.footer__chat_button}>
            <Image
              src="/img/chat.svg"
              alt="chat"
              width={50}
              height={50}
              style={{
                maxWidth: "60%",
                height: "auto",
              }}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
