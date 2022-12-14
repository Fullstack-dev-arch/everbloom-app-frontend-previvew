import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useAuth from "@/hooks/useAuth";
import { WALLET_TYPE } from "@/libs/constants";

export const AuthContext = createContext({
  isSignedIn: false,
  email: "",
  walletType: WALLET_TYPE.METAMASK,
  changeWalletType: (type: WALLET_TYPE) => {},
  signIn: (email: string, password: string = "") => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: any }) => {
  const { isSignedIn, email, walletType, changeWalletType, signIn, signOut } =
    useAuth();

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        email,
        walletType,
        changeWalletType,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthValue = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
