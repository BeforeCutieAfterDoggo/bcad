import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { PropsWithChildren, ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import "../style/App.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
  );
}
export default MyApp;
