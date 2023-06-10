import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { PropsWithChildren, ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import "../style/App.css";
import PlausibleProvider from "next-plausible";
import CartProvider from "../pages/context/CartContext";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const PlausibleWrapper = ({ children }: PropsWithChildren<{}>) => {
    if (process.env.NODE_ENV === "production") {
      return (
        <PlausibleProvider domain="bcad.one">{children}</PlausibleProvider>
      );
    }
    return <>{children}</>;
  };

  return (
    <CartProvider>
      <PlausibleWrapper>
        <Layout>
          {/* {getLayout(<Component {...pageProps} />) }  */}
          <Component {...pageProps} />
        </Layout>
      </PlausibleWrapper>
    </CartProvider>
  );
}
export default MyApp;
