
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
                                            <td className="px-4 py-2 italic ">Real-time, Anonymous Q&A Sessions, made with love</td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Features</td>
                                            <td className="px-4 py-2 italic ">People can submit and answer questions in real time. The data can be viewed as a summary in the VibeBoard. In addition, there are three AI Judges you can use to give you a summary of your community based on the answers.</td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Format</td>
                                            <td className="px-4 py-2 italic ">Web App</td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Description</td>
                                            <td className="px-4 py-2 italic ">Ever wonder what&apos;s the overall vibe of your beloved community? Ever wanted to ask the group a spicy question but didn&apos;t know how? VibeCheck enables you to host anonymous, real-time Q&A round with your community fellows.</td>
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
                        <h1 className="mt-10 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Case Study - Mars College</h1>
                        <p className="px-4 mt-10 text-black font-mono italic">Asking questions such as &quot;Tag the Community&quot;, &quot;What&apos;s your sexual preference?&quot;, &quot;What&apos;s your food preference?&quot;, &quot;How do you transport?&quot; can give you a quick reading of what the vibe of a community is like.
                        </p>
                        <p className="px-4 mt-10 text-black font-mono italic">Given Mars College as an example: </p>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            <b>It&apos;s a tech-centric, hippie community full of artsy people and builders. The ratio of women:men is about 2:3, with some being trans or gender-fluid. Also, there are a lot of people practicing polyamory in this community. Most people are meat eaters, but if you&apos;re looking for delicious food, you might be at the wrong place. The most common way to travel around the community is using electric unicycle, and most people are living in a Trailer/RV</b>
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
                            But hey! People are still very grateful of what the experience brought them c:
                        </p>
                        <div className="flex ">
                            <img className="w-full border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop5/2.png" />
                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            Lastly, we also made an AI summary section where you can generate a summary of your community based on the answers. The summary is generated by three AI Judges: <b>Perky Judge</b>, <b>Cool Judge</b>, and <b>Snarky Judge</b>.
                            Because there is a limit on the number of input tokens that OpenAI can handle, if there are too many questions and answers in a session, it may not function properly. However, we plan to improve this in the future
                        </p>
                        <div className="flex ">
                            <img className="w-full border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop5/4.png" />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
