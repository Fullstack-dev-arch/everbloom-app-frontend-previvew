import Image from "next/image";

import styles from "./index.module.css";

import Info from "@/components/icons/Info";

type Props = {
  text: string;
  img: string;
  onClick: any;
  isActive: boolean;
};

const ProviderItem = ({ text, img, onClick, isActive }: Props) => {
  return (
    <div className={styles.modal__provider_item}>
      <button
        className={`${styles.modal__provider_item_button} ${
          isActive && styles.modal__provider_item_button_active
        }`}
        onClick={() => onClick()}
      >
        <Image src={img} alt="metamask" width={30} height={30} />
        {text}
      </button>

      <Info
        width="24"
        height="24"
        className={styles.modal__provider_item_button_info}
      />
    </div>
  );
};

export default ProviderItem;
