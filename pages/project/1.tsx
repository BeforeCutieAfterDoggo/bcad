
export default function ProductPage() {
    //detect if user is on mobile

    return (
        <div className="relative overflow-hidden bg-white py-16">
            <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                </div>
            </div>
            <div className="relative divide-y-2 divide-black">
                <div className="mx-auto max-w-prose text-lg ">
                    <h1>
                        <span className="mt-2 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            TRIP
                        </span>
                    </h1>

                </div>
                <div className="mx-auto mt-6 text-gray-500 divide divide-y-2 divide-black xl:bg-[#E4E4E2]">
                    <img className="mx-auto" src="/drops/drop1/1.png"></img>
                    <div className="xl:flex justify-center">
                        <div className="w-full  xl:w-1/2 ">
                            <img className=" w-full border-r-2 border-b-2 border-black " src="/drops/drop1/loop.gif"></img>
                        </div>

                        <div className="w-full  xl:w-1/2 flex flex-col items-center justify-center  border-b-2 border-black">
                            <table className="w-full text-center">

                                <tbody className="text-black font-mono text-start">
                                    <tr className=" border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Page</td>
                                        <td className="px-4 py-2 italic  ">27</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Price</td>
                                        <td className="px-4 py-2 italic ">$4.10</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Format</td>
                                        <td className="px-4 py-2 italic ">PDF</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Size</td>
                                        <td className="px-4 py-2 italic ">58.2MB</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Description</td>
                                        <td className="px-4 py-2 italic ">Cutie&apos;s first mushroom trip through the eyes of AI. A highly personal, fun, sentimental, and profound experience. </td>
                                    </tr>
                                </tbody>
                            </table>
                            <a target="_blank" rel="noreferrer" href="https://6393998291548.gumroad.com/l/trip?_gl=1*q9vdtc*_ga*MTk1ODU3MTc5LjE2NzU3OTEwNDc.*_ga_6LJN6D94N6*MTY3NTc5MTA0Ny4xLjEuMTY3NTc5MzEyMS4wLjAuMA">
                                <button className="mt-10 pb-2 border border-2 border-black text-black font-bold font-mono py-2 px-4 italic bg-[#F585AD] mb-10">Buy On Gumroad</button>
                            </a>
                        </div>

                    </div>



                </div>


            </div>
        </div>
    )
}
