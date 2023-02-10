
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
                            Meet Spaghettify
                        </span>
                    </h1>

                </div>
                <div className="mx-auto mt-6 text-gray-500   relative">
                    <img className="absolute inset-0 h-96 w-screen object-cover " src="/drops/drop2/grad2.png" alt="" />

                    <img className="relative mx-auto" src="/drops/drop2.png"></img>

                    <div className="xl:flex justify-center h-full">
                        <div className="w-full   xl:w-1/2 ">
                            <img className=" w-full border-r-2 border-b-2 border-black border-t-2 " src="/drops/drop2/cmd.png"></img>
                        </div>

                        <div className="w-full  xl:w-1/2 flex flex-col items-center justify-center  border-b-2 border-t-2  border-black">
                            <table className="w-full text-center">

                                <tbody className="text-black font-mono text-start">
                                    <tr className=" border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold "># Brushes</td>
                                        <td className="px-4 py-2 italic  ">8</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Price</td>
                                        <td className="px-4 py-2 italic ">Your Sanity</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Format</td>
                                        <td className="px-4 py-2 italic ">VSCode Extension</td>
                                    </tr>
                      
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Description</td>
                                        <td className="px-4 py-2 italic ">Make your code worse magically, with the power of AI. Meet Spaghettify. </td>
                                    </tr>
                                </tbody>
                            </table>
                            <a target="_blank" rel="noreferrer" href="https://www.spaghettify.dev/">
                                <button className="mt-10 pb-2 border border-2 border-black text-black font-bold font-mono py-2 px-4 italic bg-gradient-to-r from-[#B03DCB] to-[#7CEAA1] mb-10">Download</button>
                            </a>
                        </div>

                    </div>



                </div>


            </div>
        </div>
    )
}
