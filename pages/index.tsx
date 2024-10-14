import Head from "next/head";
import Season1 from "../components/Seasons/Season1";
import Season2 from "../components/Seasons/Season2";
export default function Home(): any {
  return (
    <>
      <Head>
        <title>BCAD</title>
        <script
          defer
          src="https://umami-tawny-theta.vercel.app/script.js"
          data-website-id="2f689c74-a3c1-41af-b14a-010a28c4f01f"
        ></script>
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
