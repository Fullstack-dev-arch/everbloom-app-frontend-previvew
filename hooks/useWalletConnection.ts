import { useWeb3React } from "@web3-react/core";
import { CHAIN_ID_HEX, TAG_PROVIDER } from "@/libs/constants";
import { Wallet } from "@/interfaces/Wallet";
import { useAuthValue } from "@/contexts/AuthContext";

const useWalletConnection = () => {
  const { active, account, chainId, library, activate, deactivate } =
    useWeb3React();
  const { changeWalletType } = useAuthValue();

  const connectWallet = (
    wallet: Wallet,
    callBack: any = null,
    errorCallBack: any = null
  ) => {
    if (!window) return;

    window.localStorage.clear();
    window.localStorage.setItem(TAG_PROVIDER, wallet.title);

    changeWalletType(wallet.type);

    if (callBack && active) {
      callBack();
    }

    activate(wallet.connector, (error: Error) => {
      console.log(error.message);

      if (errorCallBack) {
        errorCallBack();
      }

      if (error.name == "UnsupportedChainIdError") {
        try {
          // @ts-ignore
          window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: CHAIN_ID_HEX }],
          });
        } catch (err: any) {
          if (err.code === 4902) {
            // @ts-ignore
            window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [CHAIN_ID_HEX],
            });
          }
        }
      }
    });
  };

  const disconnectWallet = (callBack: any = null) => {
    window.localStorage.clear();
    if (callBack) {
      callBack();
    }
    deactivate();
  };

  return { active, account, chainId, library, connectWallet, disconnectWallet };
};

export default useWalletConnection;
