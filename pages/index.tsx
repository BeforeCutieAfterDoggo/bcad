import Head from "next/head";
import Season1 from "../components/Seasons/Season1";
import Season2 from "../components/Seasons/Season2";
export default function Home(): any {
  return (
    <>
      <Head>
        <title>BCAD</title>
      </Head>
      <main className="min-h-screen pb-14 flex justify-center relative">
        <img
          className="top-0 left-0 border border-white border-2 w-screen h-screen object-cover"
          src="/bgs/bg0.png"
        />
        <img
          className=" absolute m-auto my-64 border border-white border-2 justify-center w-1/2 md:w-1/3 md:my-40 lg:w-1/4 lg:my-36 h-auto xl:w-1/4 xl:my-32 2xl:w-1/4 2xl:my-24 "
          src="/images/1.png"
        />
        {/* <div className="absolute m-auto bottom-72 sm:bottom-20 md:bottom-40">
          <SubscribeForm />
        </div> */}
      </main>
      <Season2 />
      <div className="mt-4">
        <Season1 />
      </div>
    </>
  );
}
