import React from "react";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";

import "@/styles/globals.css";

function getLibrary(provider: any) {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </AuthProvider>
  );
}

export default MyApp;
