import { Wallet } from "@/interfaces/Wallet";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const TAG_PROVIDER = "PROVIDER";

export const CHAIN_ID = 5;
export const CHAIN_ID_HEX = "0x5";
export const CHAIN_NAME = "Goerli";
export const ETHERSCAN_LINK = "https://goerli.etherscan.io";
export const INFURA_KEY = "b72ba083e8ea4a2881043c899b99f0f0";
export const PROVIDER_URL = `https://${CHAIN_NAME.toLowerCase()}.infura.io/v3/${INFURA_KEY}`;

export enum WALLET_TYPE {
  METAMASK,
  WALLETCONNECT,
}

export enum STRATEGIES {
  MAKER,
  FRAX_3CRV,
  GMX_DELTA_Neutral,
}

const METAMASK_CONNECTOR = new InjectedConnector({
  supportedChainIds: [CHAIN_ID],
});

const WALLETCONNECT_CONNECTOR = new WalletConnectConnector({
  // @ts-ignore
  rpcUrl: `https://${CHAIN_NAME.toLowerCase()}.infura.io/v3/${INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const METAMASK_WALLET = {
  title: "Metamask",
  type: WALLET_TYPE.METAMASK,
  connector: METAMASK_CONNECTOR,
  icon: "/img/metamask.svg",
} as Wallet;

export const WALLETCONNECT_WALLET = {
  title: "WalletConnect",
  type: WALLET_TYPE.WALLETCONNECT,
  connector: WALLETCONNECT_CONNECTOR,
  icon: "/img/walletConnect.svg",
} as Wallet;
