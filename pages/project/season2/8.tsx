import Link from "next/link";
import { useState } from "react";

export default function ProductPage() {
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);

  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative divide-y-2 divide-black">
        <div className="mx-auto max-w-prose text-lg  ">
          <h1>
            <span className="mt-2 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl mx-4">
              Prove To Me That You Are a Bot
            </span>
            <p className="text-center font-mono italic mt-2">
              Bast Captcha, Automation Defense
            </p>
          </h1>
        </div>
        <div className="mx-auto mt-6 text-gray-500 bg-[#1C1B19] relative">
          <img className="relative mx-auto" src="/drops/drop8.png"></img>

          <div className="xl:flex justify-center h-full">
            <div className="w-full  xl:w-1/2 flex flex-col items-center justify-center  border-b-2 border-t-2  border-black">
              <table className="w-full text-center ">
                <tbody className="text-white font-mono text-start">
                  <tr className=" border-b-2 border-black">
                    <td className="px-4 py-2 font-bold ">Name</td>
                    <td className="px-4 py-2 italic  ">Bast Captcha</td>
                  </tr>
                  <tr className="border-t-2 border-b-2 border-black">
                    <td className="px-4 py-2 font-bold ">Price</td>
                    <td className="px-4 py-2 italic ">Free</td>
                  </tr>

                  <tr className="border-t-2 border-b-2 border-black">
                    <td className="px-4 py-2 font-bold ">Format</td>
                    <td className="px-4 py-2 italic ">
                      Discord AI Captcha Bot
                    </td>
                  </tr>

                  <tr className="border-t-2 border-b-2 border-black">
                    <td className="px-4 py-2 font-bold ">Difficulty Level</td>
                    <td className="px-4 py-2 italic ">
                      Easy for the machines; Impossible for the mortals.
                    </td>
                  </tr>

                  <tr className="border-t-2 border-b-2 border-black">
                    <td className="px-4 py-2 font-bold ">Description</td>
                    <td className="px-4 py-2 italic ">
                      An AI-powered captcha bot: Prove that you are <b>a</b>{" "}
                      bot! Join our Discord channel, and we will provide you
                      with comprehensive justification if you don't get the
                      answer right.
                    </td>
                  </tr>
                </tbody>
              </table>
              <a
                href="https://discord.gg/KHTmFHeNtq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-10 pb-2 flex border border-2 border-black  font-bold font-mono py-2 px-4 bg-gradient-to-r from-[#F9C54C] to-[#F9C54C]  mb-10 text-3xl ">
                  {" "}
                  🤖
                  <p className="text-lg italic ml-2 text-black mt-1 ">
                    Take The Challenge!{" "}
                  </p>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col text-center">
          <p className="mt-5 text-3xl font-mono">Sample Questions</p>

          <div className="boreder border-2 mx-4 mt-2 pb-4 border-black rounded-xl">
            <p className="mx-20 mt-4 text-2xl font-mono font-bold">
              Number 001
            </p>
            <p className="mx-20">
              If the pattern length represents the total number of rows, and
              each row is represented by the pattern width number of beads, what
              is the total count of beads used to create the entire pattern?
            </p>
            <button
              className="border border-2 w-48 bg-black mx-auto text-white rounded-xl font-mono"
              onClick={() => setQ1(!q1)}
            >
              {" "}
              Reveal Answer
            </button>
            {q1 && <p className="mx-20">5760</p>}
            <img
              className="mt-4 relative mx-auto "
              src="/drops/drop8/1.png"
            ></img>
          </div>

          <div className="boreder border-2 mx-4 mt-2 pb-4 border-black rounded-xl">
            <p className="mx-20 mt-4 text-2xl font-mono font-bold">
              Number 002
            </p>
            <p className="mx-20">
              If you opt for a one-month billing cycle, how much would you save
              compared to the regular monthly price, and by what percentage is
              this discount represented?
            </p>
            <button
              className="border border-2 w-48 bg-black mx-auto text-white rounded-xl font-mono"
              onClick={() => setQ2(!q2)}
            >
              {" "}
              Reveal Answer
            </button>
            {q2 && <p className="mx-20">$10.94</p>}
            <img
              className="mt-4 relative mx-auto "
              src="/drops/drop8/2.png"
            ></img>
          </div>

          <div className="boreder border-2 mx-4 mt-2 pb-4 border-black rounded-xl">
            <p className="mx-20 mt-4 text-2xl font-mono font-bold">
              Number 003
            </p>
            <p className="mx-20">
              If you combine the last two digits of the year when all 6
              challenger packs became available and the second numeric value
              shown under the "Fighters Pass Vol. 2" price, what number do you
              get?
            </p>
            <button
              className="border border-2 w-48 bg-black mx-auto text-white rounded-xl font-mono"
              onClick={() => setQ3(!q3)}
            >
              {" "}
              Reveal Answer
            </button>
            {q3 && <p className="mx-20">119</p>}
            <img
              className="mt-4 relative mx-auto "
              src="/drops/drop8/3.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
