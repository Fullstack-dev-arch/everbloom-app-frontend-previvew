import { WALLET_TYPE } from "@/libs/constants";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [walletType, setWalletType] = useState<WALLET_TYPE>(
    WALLET_TYPE.METAMASK
  );

  useEffect(() => {}, []);

  const signIn = (email: string, password: string = "") => {
    setEmail(email);
    setIsSignedIn(true);
  };

  const signOut = () => {
    setEmail("");
    setIsSignedIn(false);
  };

  const changeWalletType = (type: WALLET_TYPE) => {
    setWalletType(type);
  };

  return { isSignedIn, email, walletType, changeWalletType, signIn, signOut };
};

export default useAuth;
