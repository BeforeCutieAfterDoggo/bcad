import React from 'react';

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
                            Bombay Beachy Yami Ichi
                        </span>
                        <p className="text-center font-mono italic">Biennale Convention for Acquiring Doodads</p>

                    </h1>
                </div>
                <div className="mx-auto mt-6 text-gray-500 bg-white relative">
                    <img className="relative mx-auto" src="/drops/drop6.png"></img>
                    <div className="xl:flex justify-center h-full  border-t-2 border-black">
                        <div className="xl:flex justify-center">
                            <div className="w-full  xl:w-1/2 ">
                                <img className=" w-full border-r-2 lg:border-b-2  border-black " src="/drops/drop6/1.jpeg"></img>

                            </div>
                            <div className="w-full  xl:w-1/2 flex flex-col items-center justify-center  border-b-2 border-black">
                                <table className="w-full text-center">
                                    <tbody className="text-black font-mono text-start">
                                        <tr className=" border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">What Is It</td>
                                            <td className="px-4 py-2 italic"><a className='underline decoration-solid' href="http://yami-ichi.biz/" target="_blank" rel="noreferrer" >网络黑市</a> in Bombay Beach</td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Format</td>
                                            <td className="px-4 py-2 italic ">IRL Event at Bombay Beach, CA</td>
                                        </tr>
                                        <tr className="border-t-2 border-b-2 border-black">
                                            <td className="px-4 py-2 font-bold ">Description</td>
                                            <td className="px-4 py-2 italic "></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a target="_blank" rel="noreferrer" href="https://www.bbyi.fyi/">
                                    <button className="mt-10 pb-2 text-black border border-black border-2 font-bold font-mono py-2 px-4 italic   mb-10">🐟 Check Out Our Works Here!</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="xl:flex flex-col justify-center  h-full  border-black">
                        <h1 className="mt-10 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">We Came Up 14 Ideas in 14 Days Right After We Got Married, and We Finished All of Them</h1>
                        <p className="px-4 mt-10 text-black font-mono italic">
                            Here's how it started. Last October Jmill (now husband, then boyfriend) and I were visiting our friends Moises and Fabiola in Miami, and while walking around their apartment complex, Moises said they were planning to start an Internat Yami-ichi in January, which translates to Internet Black Market.
                            It originated in Tokyo, Japan in 2012 and was organized by an online internet community called IDPW. It started because an iOS app made by a member of the club was rejected by Apple, with the rejection reason that it was not useful enough and/or entertaining enough for Apple users.
                            In a fit of pique they decided to bring the internet to the real world and interact with people face to face, and this event was born.
                            Soon this black market spread all over the world and was organized in a decentralized form by various people. All you need to do is to email the founders that you want to hold it, and they will put your event information and photos on the official website after it is successfully held.
                            Jmill's eyes lit up when he heard about this event, and although he couldn't participate in the January black market, he really wanted to make one happen at Mars College.
                        </p>
                        <p className="px-4 mt-10 text-black font-mono italic">
                            Jmill and I got married at Mars College on March 18th of this year. After a day of rest, we started organizing this event with Martians.
                            The best time to organize this event is on April 1st, the third day of the Bombay Beach Biennale, when many tourists and artists come to the town, make installations and do activities.
                            And we had two weeks to find participants, make our own work, and work on the layout of the venue.
                            Many thanks to Gene who provided the venue for free, Nico who helped set up the venue, Kirby who made a cool logo, Will who made a cool physical laser cutted sign according to the cool logo, and all the participants I will introduce below. All of the work can be seen on this website at: <a className='underline ' href='https://www.bbyi.fyi/'>https://www.bbyi.fyi/</a>
                        </p>
                        <p className="px-4 mt-10 text-black font-mono italic">
                            First of all, I would like to self-promoting my work with Jmill.
                        </p>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            This work is called Obsidian Vault, the famous open source notes management tool featuring double links. I picked up those obsidians on the roadside near Salton Sea. At that time I thought I could make something related to Obsidian Notes, but haven't figured out how to present it.
                            Later on, the idea came up that people could write their notes on a purple post-it, in exchange for an obsidian rock. It turned out that this work was so popular that there were no more obsidians but people were still writing notes. We had no choice but to pick up gravel on the spot to exchange their notes :P.
                            We received so many interesting notes that we had to marvel at how queer a human brain could be. We even had the first double-linked notes (see bottom right).
                        </p>
                        <div className="flex">
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/2.1.jpeg" />
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/2.2.jpeg" />
                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            The second project we did was called EitherRocks, which came from an OG NFT project called Ether Rocks.
                            When I was exploring the old Navy site in Salton Sea, I risked being killed by a grenade and picked up a pile of transparent volcanic rocks called Gypsum. Jmill suggested that I could make a piece related to Ether Rocks.
                            Since all NFTs have traits to indicate rarity, we thought we could use Sims 1's traits on the rocks.
                            We carefully scored the charatersitics of each rock according to the five traits of Neat, Outgoing, Active, Playful, and Nice, and wrote them on the package.
                            Magically we scored each stone trait very similarly. We also kind of able to map them one by one to people we know in reality. They almost felt alive to us now!
                            In terms of why we call this work EitherRocks is because the player must blindly choose two rocks from the bag, open their eyes, and choose one of the rocks to take away.
                            Perhaps because it was too crypto, only one of all the visitors got the original reference.
                        </p>
                        <div className="flex ">
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/3.1.png" />
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/3.2.jpeg" />
                        </div>

                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            Next up is the work of Josh, a digital nomad who is super responsible and comfortable to communicate with. But he doesn't use social networking software at all and usually only communicates by email and text message.
                            His idea is often very to the point. For example, he made a free Facebook registration form for everyone to fill out for this internet black market. It's super detail focused and intriging.
                        </p>
                        <div className="flex ">
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/4.1.jpeg" />
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/4.2.jpg" />                        </div>

                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            Vincent is a "multi-functional" artist who is able to link software and hardware through touch designer, often producing some very impressive and high quality work.
                            He made an installation in the black market called Shadow Selfies, which I prefer to call an AI roasting machine.
                            When you get close to the mirror, it automatically takes a picture of you and then uses OpenAI's GPT-3 to analyze your appearance, generate a paragraph to cyber-bully you and broadcast it in a female AI's voice
                        </p>
                        <div className="flex ">
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/5.1.png" />
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/5.2.png" />                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            Karo, the author of the work on the left, is a very healing artist. She specializes in "fortune telling" and has an amazing intuition and ability to calm people.
                            Every time I interact with her, I feel like I'm in a warm spa holding a mint-flavored cold drink.
                            She bought two headphone headbands and made the headphone part with obsidian and palm leaves respectively.
                            I feel my brain will automatically shift into nature once I put them on.

                        </p>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            The picture on the right is an AI chatbot booklet made by an ADHD biologist named Marzipan. He likes to do remix with AI and the text he wrote.
                            His prompt for AI is one the highest quality prompts I've ever seen, able bringing out the most unique and interesting side of AI.
                            Mars College has four divisions, representing water, earth, fire and Air. He gave Chatsubo, who represents the Fire God, a very hot character in last year's Mars College.
                            Chatsbo is a bit of a cynical old man, speaking very directly, sometimes very rude, but with a very human touch. This booklet is a collection of conversations between Martian and this Fire God.
                            The asking price was a nugget of weed. One man bought a booklet for the price of a nugget of fine weed.
                        </p>
                        <div className="flex ">
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/6.1.jpeg" />
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/6.2.jpeg" />
                        </div>

                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            The Internet black market, of course, will have people who use software names to make food. Over the years, there are those who make cookies, representing HTTP cookies, and those who make raspberry pies (Raspberry Pi).
                            There's no shortage of cursor cookies this year either. The author of this work is Chabel, an artist from Brazil who does everything from VR to film, and has recently been working with her partner Ygor on a very trippy but super engaging animation using AI.
                            In the past she has helped local female sex workers in Brazil to sell soaps to support themselves during the epidemic, and her work focuses on nature, animals, and women, those who are considered as non-mainstream characters. I really admire her work.
                        </p>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            On the right is an Instagram Mat that was the idea of Jmill and executed by me. it's a very Meta piece (pun intended). This is also the first time I've worked with a Chinese manufacturer.
                            I was very excited when I received the goods. I feelt very accomplished first time seeing the idea comes to birth.
                        </p>

                        <div className="flex ">
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/7.1.jpeg" />
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/7.2.jpeg" />
                        </div>

                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            Finally, the best sellers were the stickers in Figure 1 and Figure 2. The first one is a FOMO spectrum meme sticker brought by a Martian named Sam.
                            Before coming to Mars, Sam was researching how to how to make the museums taking appropriate risk and make the exhibition more interesting and engaging.
                            She discovered that people can have not only FOMO but also JOMO. Then if you stretching the two ends of the spectrum, there will be FOJI and JOJI. and JOJI is probably the best experience that people can have out of the three options.

                        </p>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            Figure 2 is the logo designed by Kirby, whose art always has iridescent colors and trippy geometric shapes.
                            The center of the logo is a fish bone, representing the dead fish bones on the polluted Salton Sea beach.
                            And one of the genius designs is the fish's eye, which is Apple's loading cursor.
                        </p>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            Figure 3 is inspired by Dennou Coil, where they use Japanese talisman papers to fix certain computer bugs. So I thought it would be cool if I do a Chinese version of it.
                            If you stick it on your computer, it can reduce 30% of computer bugs :)
                        </p>

                        <div className="flex ">
                            <img className="w-1/4 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/8.1.png" />
                            <img className="w-1/4 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/8.2.png" />
                            <img className="w-1/2 border-b-2 border-t-2 border-r-2 border-black" src="/drops/drop6/8.3.png" />

                        </div>
                        <p className="px-4 mt-10 text-black font-mono mb-6 italic">
                            There are many more works I haven't introduced because I want to keep it short, you can go to the website I mentioned at the beginning to see the complete list.
                            Some takeaways from this event is that the Bombay Beach is a very giving oriented place. It's a bit similar to the Burning Man Festival, where everyone gives away something to each other for free.
                            One of the most popular work was the Obsidian Vault, which was very interactive and everyone had a lot of fun interacting with each other.
                            This event also made me realize that if you have something you want to show to the world, people will help you to achieve it. But you have to believe that it will happen and execute the necessary steps.
                            And given its low-stake, low-expectation nature, this event also enabled a lot of people who are not artists to get involved and stimulated their creativity. I think it's really magical.
                            We made a lot of "useless" stuff, but we attract a lot of people who are just as weird as we are to appreciate our work. We may not have made any money, but we got a lot of psychologically enriching experiences.
                            These experiences are hard to find.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}
