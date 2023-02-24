
export default function ProductPage() {
    //detect if user is on mobile

    return (
        <div className="relative overflow-hidden bg-white py-16">
            <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                </div>
            </div>
            <div className="relative divide-y-2 divide-black">
                <div className="mx-auto max-w-prose text-lg  ">
                    <h1>
                        <span className="mt-2 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            Discord AI Tarot Bot
                        </span>
                        <p className="text-center font-mono italic">Bella Coven, Automated Diviner</p>

                    </h1>

                </div>
                <div className="mx-auto mt-6 text-gray-500 bg-[#1C1B19] relative">

                    <img className="relative mx-auto" src="/drops/drop3.png"></img>

                    <div className="xl:flex justify-center h-full">


                        <div className="w-full  xl:w-1/2 flex flex-col items-center justify-center  border-b-2 border-t-2  border-black">
                            <table className="w-full text-center ">

                                <tbody className="text-white font-mono text-start">
                                    <tr className=" border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Name</td>
                                        <td className="px-4 py-2 italic  ">Bella Coven</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Price</td>
                                        <td className="px-4 py-2 italic ">Free</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Reading Comprehensiveness</td>
                                        <td className="px-4 py-2 italic ">Very good (●&apos;◡&apos;●)</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Image Generating Quality</td>
                                        <td className="px-4 py-2 italic ">Primal, still learning ૮₍ ˃ ⤙ ˂ ₎ა </td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Reading Capacity</td>
                                        <td className="px-4 py-2 italic ">One at a time, please be patient ⸜(｡˃ ᵕ ˂ )⸝ </td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Format</td>
                                        <td className="px-4 py-2 italic ">Discord AI Bot</td>
                                    </tr>

                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Description</td>
                                        <td className="px-4 py-2 italic ">An AI-powered tarot reader bot. </td>
                                    </tr>
                                </tbody>
                            </table>
                            <a target="_blank" rel="noreferrer" href="https://discord.gg/2usz2bqekQ">
                                <button className="mt-10 pb-2 flex border border-2 border-black text-white font-bold font-mono py-2 px-4 bg-gradient-to-r from-[#1C1B19] to-[#B03DCB]  mb-10 text-3xl "> 🔮 <p className="text-lg italic ml-2 mt-1 ">TRY IT OUT! </p></button>
                            </a>
                        </div>

                    </div>



                </div>


            </div>
        </div>
    )
}
