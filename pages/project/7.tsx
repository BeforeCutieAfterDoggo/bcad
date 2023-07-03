import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import SubscribeForm from "../../components/ConvertKit";
export default function ProductPage() {
    const [checked, setChecked] = useState(false);
    const router = useRouter();
    const handleToggleChange = (checked: boolean) => {
        setChecked(checked);
        if (checked) {
            router.push("/project/6-1");
        } else {
            router.push("/project/6");
        }
    };
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
                        <span className="mt-2 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            Emotional Intelligence Board Game
                        </span>
                        <p className="text-center font-mono italic">
                            Box of Cards for Authentic Dialogue
                        </p>
                    </h1>

                </div>
                <div className="mx-auto mt-6 text-gray-500 bg-white relative">
                    <img className="relative mx-auto" src="/drops/drop7.png"></img>
                    <div className="xl:flex justify-center h-full  border-t-2 border-black">
                        <div className="xl:flex justify-center">
                            <div className="w-full  xl:w-1/2 ">
                                <img
                                    className=" w-full border-r-2 lg:border-b-2  border-black "
                                    src="/drops/drop7/0.png"
                                ></img>
                            </div>
                            <div className="w-full  xl:w-1/2 flex flex-col items-center justify-center  border-b-2 border-black">
                                <table className="w-full text-center">
                                    <tbody className="text-black font-mono text-start">
                                        <tr className=" border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">What Is It</td>
                                            <td className="px-4 py-2 italic">
                                                A board game focus on Emotional Intelligence
                                            </td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Format</td>
                                            <td className="px-4 py-2 italic ">
                                                Physical Box
                                            </td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Description</td>
                                            <td className="px-4 py-2 italic ">Hey you, are you emotionally intelligent? Come find out :). Dive into the world of emotional intelligence with our captivating and aesthetically pleasing creation! More than just a deck of questions, our innovative game combines engaging gameplay strategies with the exploration of 6 distinct social archetypes.</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.kickstarter.com/projects/bcad/eibg-emotional-intelligence-board-game"
                                >

                                    <button className="mt-10 bg-[#05ce78] pb-2 text-black border border-black border-2 font-bold font-mono py-2 px-4 italic   mb-10">
                                        📦 Reserve Your Copy on KickStarter! (Prelaunch, Coming Soon)
                                    </button>

                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="xl:flex flex-col justify-center  h-full  border-black">

                        <div className="flex justify-center mt-10">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/lCmug_l9QLI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>
                        <h1 className="mt-10 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            6 Social Archetypes
                        </h1>
                        <div className="flex mt-10">
                            <img
                                className="border-b-2 border-t-2 border-r-2 border-black"
                                src="/drops/drop7/2.png"
                            />
                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            <b>🦒 Intuitor:</b> An Intuitor is a person who communicates with empathy and compassion. The term &quot;Big heart&quot; comes from the book &quot;Nonviolent Communication&quot; by Marshall Rosenberg, where he uses the image of a giraffe with a big heart to symbolize nonviolent communication. In this context, I refer to an Intuitor as a &quot;Sincere Giraffe&quot; because they embody the qualities of authentic relating, nonviolent communication, and conflict resolution.
                            <br />
                            <br />
                            <b>🦋 Connector:</b>A Connector is someone who communicates through the power of empathy. The concept of the &quot;Empathy Butterfly&quot; represents this type of communication, inspired by the transformative practice of drama therapy. In the same way that an Intuitor is represented by the Sincere Giraffe, a Connector can be symbolized by the Empathy Butterfly. Connectors excel in various areas such as drama therapy, building connections through relating, facilitating celebrations, and fostering meaningful group circles.
                            <br />
                            <br />
                            <b>🐐 Enhancer:</b>An Enhancer is someone who channels their energy through focused intention. The symbol of the &quot;Intention Antelope&quot; embodies this concept, representing the Enhancer&apos;s ability to set clear intentions and move forward with purpose. With expertise in practices like Feldenkrais, meditation, yoga, jiujitsu, and somatic/embodiment coaching, the Enhancer possesses a diverse skill set that aids in personal growth and transformation. By utilizing their intentional approach, they empower individuals to cultivate body awareness, mental clarity, and physical well-being.
                            <br />
                            <br />
                            <b>🐙 Conjurer:</b>A Conjurer is an individual who skillfully taps into the depths of the subconscious. Represented by the symbol of the &quot;Open Octopus,&quot; the Conjurer embraces the vastness of the inner world and the power of imagination. Through their expertise in art therapy, internal family systems, and subconscious games, they guide individuals on a transformative journey of self-discovery and healing. By creating a safe and nurturing environment, the Conjurer helps individuals explore their hidden emotions, navigate complex inner dynamics, and unlock the potential for personal growth and self-expression.
                            <br />
                            <br />
                            <b>🕷️ Manipulator:</b>
                            A Manipulator is an individual who adeptly navigates the realm of control and influence. The symbol of the &quot;Control Spider&quot; embodies their ability to intricately weave webs of manipulation. With expertise in areas such as game shows, rituals, and role-play, the Manipulator excels in engaging others through strategic tactics and skillful maneuvering. They possess a keen understanding of social dynamics and utilize their abilities to guide interactions and shape outcomes. While their skills may be utilized ethically and responsibly, it&apos;s important to approach interactions with a Manipulator with awareness and discernment.
                            <br />
                            <br />
                            <b>🐜 Specialist:</b>A Specialist is a unique individual who thrives on focused exploration and innovation. Represented by the symbol of the &quot;Focus Ant,&quot; they embody unwavering dedication and meticulous attention to detail. What sets the Specialist apart is their ability to develop their own distinct system and theory by synthesizing knowledge and insights from various fields and other types.
                        </p>
                        <div className="flex mt-10">
                            <img
                                className="border-b-2 border-t-2 border-r-2 border-black"
                                src="/drops/drop7/3.png"
                            />
                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            If you&apos;re a Hunter x Hunter fan, you might be familiar with this diagram. Yes, it&apos;s the diagram of Nen powers. I changed two of the archetypes to intuitors and connectors and rearranged the diagram. The types that are closer to each other are more similar, while the types that are further apart are more different. The kanji at the center represents the word &quot;emotion&quot;.
                        </p>
                        <div className="flex">
                            <img
                                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                                src="/drops/drop7/5.png"
                            />
                            <img
                                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                                src="/drops/drop7/4.png"
                            />
                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            The board game has 120 playing cards, with each archetype containing 20 cards. There are 8 zero-point cards, 7 one-point cards, and 5 two-point cards in each archetype. As shown in the diagram, the three dots next to the score dot represent the colors of the cards that the player has to hold before they can pick and play the card.
                        </p>
                        <div className="flex mt-10">
                            <img
                                className="border-b-2 border-t-2 border-r-2 border-black"
                                src="/drops/drop7/6.png"
                            />
                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            There are a total of 18 asset cards in the game, with 3 cards for each archetype. Each asset card specifies a different color of card that the player needs to hold, as well as the quantity of colored cards required in order to acquire the asset card on their turn. The large number displayed in the top right corner of the card represents the number of points the player will receive if they successfully obtain that card.
                        </p>
                        <div className="flex mt-10">
                            <img
                                className="border-b-2 border-t-2 border-r-2 border-black"
                                src="/drops/drop7/7.png"
                            />
                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            In case people are unsure of what to say, we have also created 36 prompt cards for players to reference. Some of these prompt cards provide additional detailed explanations and guidance for the playing cards.
                        </p>
                        <div className="flex mt-10">
                            <img
                                className="border-b-2 border-t-2 border-r-2 border-black"
                                src="/drops/drop7/8.png"
                            />
                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            Finally, we have 6 rule-changing cards, each corresponding to an archetype. Players have the flexibility to use these cards at any time during the game.                        </p>
                        <div className="flex mt-10">
                            <img
                                className="border-b-2 border-t-2 border-r-2 border-black"
                                src="/drops/drop7/9.png"
                            />
                        </div>
                        <div className="flex justify-center mt-10">
                            <div className="flex flex-col">
                                <p>Get notified on board game launch!</p>
                                <SubscribeForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
