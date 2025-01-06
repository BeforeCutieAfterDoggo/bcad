import Link from "next/link";
import Footer from "../layout/footer";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};
export default function FrontPage({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-col min-h-screen divide-y-1 divide-white">
        <nav className="" aria-label="Global">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Link href="/">
                <a className="flex justify-center ml-8 mt-6">
                  <img
                    className="mb-4 md:h-20 mt-2 md:ml-0 h-16"
                    src="/icons/bcad2.png"
                    alt="BCAD Logo"
                  />
                </a>
              </Link>
            </div>

            <div className="relative mr-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="font-mono px-4 py-2 bg-[#EDEBD6] hover:bg-black hover:text-white hover:scale-105 rounded font-bold rounded-2xl border border-black transition-all duration-300"
              >
                More
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#EDEBD6] border border-gray-700 rounded shadow-lg z-10">
                  <Link href="https://www.instagram.com/bcad_one/?hl=en">
                    <a className="block px-4 py-2 font-mono hover:bg-black hover:scale-105 transition-all duration-300 hover:text-white">
                      Instagram
                    </a>
                  </Link>
                  <a
                    href="https://discord.gg/reNuqypRKk"
                    className="block px-4 py-2 font-mono hover:bg-black hover:scale-105 transition-all duration-300 hover:text-white"
                  >
                    Discord
                  </a>
                  <a
                    href="https://twitter.com/bcad_dot_one"
                    className="block px-4 py-2 font-mono hover:bg-black hover:scale-105 transition-all duration-300 hover:text-white"
                  >
                    Twitter
                  </a>
                  <Link href="https://bcad.substack.com/">
                    <a className="block px-4 py-2 font-mono hover:bg-black hover:scale-105 transition-all duration-300 hover:text-white">
                      Substack
                    </a>
                  </Link>
                  <Link href="https://bcad.gumroad.com/">
                    <a className="block px-4 py-2 font-mono hover:bg-black hover:scale-105 transition-all duration-300 hover:text-white">
                      Merch
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}
