import { WALLET_TYPE } from "@/libs/constants";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export interface Wallet {
  title: string;
  type: WALLET_TYPE;
  connector: InjectedConnector | WalletConnectConnector;
  icon: string;
}
