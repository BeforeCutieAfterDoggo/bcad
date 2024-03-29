import Link from 'next/link'
import Footer from '../layout/footer'

type Props = {
  children: React.ReactNode;
};
export default function FrontPage({ children }: Props) {

  return <>
    <div className="relative flex flex-col min-h-screen  bg-[#1E1E1E] divide-y-1 divide-white">

      <nav className="mt-4 mb-4 ml-4 relative flex items-center justify-between sm:h-10 lg:justify-start mb-8" aria-label="Global">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href='/'>
              <a>
                <img className="h-10 mb-4 md:h-14  mt-2 ml-2 md:ml-10" src="/icons/bcad.png" />
              </a>
            </Link>
          </div>
        </div>

        <div className="mr-4 sm:mr-10 mt-1 items-center flex justify-end sm:flex md:flex md:flex-1 lg:w-0 ">
          <Link href={"https://www.instagram.com/bcad_one/?hl=en"}>
            <a>
              <p className='font-mono text-white sm:mr-5 sm:ml-10 ml-3'>Ins</p>
            </a>
          </Link>
          <a href='https://discord.gg/reNuqypRKk'>
            <p className='font-mono text-white sm:mr-6 ml-3'>Dis</p>
          </a>
          <a href='https://twitter.com/bcad_dot_one'>
            <p className='font-mono text-white sm:mr-6 ml-3'>Twi</p>
          </a>

          <Link href="https://bcad.substack.com/">
            <a>
              <p className='font-mono text-white sm:mr-6 ml-3 '>Sub</p>
            </a>
          </Link>
          <Link href="https://bcad.gumroad.com/">
            <a>
              <p className='font-mono text-white ml-3 '>Mer</p>
            </a>
          </Link>
        </div>
      </nav>



      <div >
        {children}

      </div>
    </div>
    <Footer />

  </>

}