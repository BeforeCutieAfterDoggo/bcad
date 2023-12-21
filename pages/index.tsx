import Head from "next/head";
import Season1 from "../components/Seasons/Season1";
import Season2 from "../components/Seasons/Season2";
export default function Home(): any {
  return (
    <>
      <Head>
        <title>BCAD</title>
      </Head>
      <main className="min-h-screen pb-14 flex-col justify-center relative">
        <Season2 />
        <div className="mt-4">
          <Season1 />
        </div>
      </main>
    </>
  );
}
