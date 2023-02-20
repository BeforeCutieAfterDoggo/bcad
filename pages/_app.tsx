import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import "../style/App.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_CODE as string, {
      includedDomains: ["bcad.one"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return (
    <Layout>
      {/* {getLayout(<Component {...pageProps} />) }  */}
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
