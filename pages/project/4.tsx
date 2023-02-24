
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
                            Coke Diffusion
                        </span>
                        <p className="text-center font-mono italic">Bain x Coca-Cola: Advertisement Diffusion</p>

                    </h1>

                </div>
                <div className="mx-auto mt-6 text-gray-500 bg-white relative">

                    <img className="relative mx-auto my-10" src="/drops/drop4.jpg"></img>

                    <div className="xl:flex justify-center h-full">


                        <div className="w-full  xl:w-1/2 flex flex-col items-center justify-center  border-b-2 border-t-2  border-black">
                            <table className="w-full text-center ">

                                <tbody className="text-black font-mono text-start">
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Format</td>
                                        <td className="px-4 py-2 italic ">Twitter Diffusion Bot</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Price</td>
                                        <td className="px-4 py-2 italic ">1 Twitter Follow</td>
                                    </tr>
                                    <tr className="border-t-2 border-b-2 border-black">
                                        <td className="px-4 py-2 font-bold ">Description</td>
                                        <td className="px-4 py-2 italic ">To celebrate the partnership of OpenAI, Bain Capital, and Coca-Cola, we're releasing an AI image bot supported by native advertising. All of your images come back with a little bit of Coca-Cola magic 🪄🥰 </td>
                                    </tr>
                                </tbody>
                            </table>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/trashmob_">
                                <button className="mt-10 pb-2 flex border border-2 border-black text-white font-bold font-mono py-2 px-4 bg-white  mb-10 text-3xl "> 🥤 <p className="text-lg italic ml-2 mt-1 text-[#E61D2A] "> CocaCola your prompt now! </p></button>
                            </a>
                        </div>

                    </div>



                </div>


            </div>
        </div>
    )
}
