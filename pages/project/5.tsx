
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
                            Vibe Check
                        </span>
                        <p className="text-center font-mono italic">Bonded Crowd Assessment Device</p>

                    </h1>
                </div>
                <div className="mx-auto mt-6 text-gray-500 bg-white relative">
                    <img className="relative mx-auto" src="/drops/drop5.png"></img>
                    <div className="xl:flex justify-center h-full  border-t-2 border-black">
                        <div className="xl:flex justify-center">
                            <div className="w-full  xl:w-1/2 ">
                                <img className=" w-full border-r-2 lg:border-b-2  border-black " src="/drops/drop5/group.jpg"></img>
                            </div>
                            <div className="w-full  xl:w-1/2 flex flex-col items-center justify-center  border-b-2 border-black">
                                <table className="w-full text-center">
                                    <tbody className="text-black font-mono text-start">
                                        <tr className=" border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">What For</td>
                                            <td className="px-4 py-2 italic ">Having A good time with your community</td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Features</td>
                                            <td className="px-4 py-2 italic ">People can submit and answer questions in real time. Then they can review view visual representations of the answers in the VibeBoard. In addition, there are three AI Judges you can use to give you a summary of your community based on the answers.</td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Format</td>
                                            <td className="px-4 py-2 italic ">Webapp</td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Types</td>
                                            <td className="px-4 py-2 italic ">Short Answer, Multiple Choices, Scale</td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Description</td>
                                            <td className="px-4 py-2 italic ">Ever wondering what&apos;s the overall profile and vibe of your beloved community? Do you have questions that you always wanted to ask but not dared to? VibeCheck enables you to host a anonymous and live interaction with your community fellows.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a target="_blank" rel="noreferrer" href="https://vibecheck.lol/">
                                    <button className="mt-10 pb-2 text-[#F5E05D] border border-black border-2 font-bold font-mono py-2 px-4 italic bg-gradient-to-r from-[#55B93B] via-[#5F65D9] to-pink-500  mb-10">Check the Vibe Now!</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="xl:flex flex-col justify-center  h-full  border-black">
                        <h1 className="mt-10 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Case Community - Mars College</h1>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">With basic questions such as &quot;Tag the Community&quot;, &quot;What&apos;s your sexual preference?&quot;, &quot;What&apos;s your food preference?&quot;, &quot;How do you transport?&quot; etc. You could easily draw an impression of an community. Given Mars College as an example:
                            <b> It&apos;s a tech-centric, hippie community full of artsy people and builders. However, if you&apos;re looking for delicious food, you might be at the wrong place.
                                There are a lot of people practicing polyamory in this community compared to default society, and most people are meat eater. The most common way to travel around the community is using electrical unicycle.
                                Most people are living in a Trailer/RV and the women to men ratio is about 4:6 with a few being gender fluid or trans.</b>
                        </p>
                        <div className="flex  ">
                            <img className="w-1/4 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop5/1.png" />
                            <img className="w-1/4 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop5/1.1.png" />
                            <img className="w-1/4 border-b-2 border-t-2 border-r-2  border-black" src="/drops/drop5/1.2.png" />
                            <img className="w-1/4 border-b-2 border-t-2 border-r-2  border-black" src="/drops/drop5/1.3.png" />
                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            You can also see that even tho most people&apos;s physical needs have been fulfilled in this community. The emotional needs might be a little bit less fulfilled.

                        </p>
                        <div className="flex ">
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop5/3.1.png" />
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop5/3.2.png" />
                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            But hey! People are still very grateful of what the experience have bought to them c:
                        </p>
                        <div className="flex ">
                            <img className="w-full border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop5/2.png" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
