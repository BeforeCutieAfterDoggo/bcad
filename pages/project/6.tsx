import React from "react";
import Toggle from "../../components/layout/toggle";
import { useState } from "react";
import { useRouter } from "next/router";
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
              Bombay Beachy Yami Ichi
            </span>
            <p className="text-center font-mono italic">
              Biennale Convention for Acquiring Doodads
            </p>
          </h1>
          <div className="flex flex-col items-center justify-center mt-2">
            <Toggle
              label="中"
              checked={checked}
              onChange={handleToggleChange}
            />
          </div>
        </div>
        <div className="mx-auto mt-6 text-gray-500 bg-white relative">
          <img className="relative mx-auto" src="/drops/drop6.png"></img>
          <div className="xl:flex justify-center h-full  border-t-2 border-black">
            <div className="xl:flex justify-center">
              <div className="w-full  xl:w-1/2 ">
                <img
                  className=" w-full border-r-2 lg:border-b-2  border-black "
                  src="/drops/drop6/1.jpeg"
                ></img>
              </div>
              <div className="w-full  xl:w-1/2 flex flex-col items-center justify-center  border-b-2 border-black">
                <table className="w-full text-center">
                  <tbody className="text-black font-mono text-start">
                    <tr className=" border-b-2 border-black">
                      <td className="px-4 py-2 font-bold ">What Is It</td>
                      <td className="px-4 py-2 italic">
                        <a
                          className="underline decoration-solid"
                          href="http://yami-ichi.biz/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          An Internet Black Market
                        </a>
                      </td>
                    </tr>
                    <tr className="border-t-2 border-b-2 border-black">
                      <td className="px-4 py-2 font-bold ">Format</td>
                      <td className="px-4 py-2 italic ">
                        IRL Event at Bombay Beach, CA
                      </td>
                    </tr>
                    <tr className="border-t-2 border-b-2 border-black">
                      <td className="px-4 py-2 font-bold ">Description</td>
                      <td className="px-4 py-2 italic ">
                        Turn off, log-out, and drop in, on the real world. The
                        Internet Yami-Ichi is a flea market for “browsing”
                        face-to-face.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.bbyi.fyi/"
                >
                  <button className="mt-10 pb-2 text-black border border-black border-2 font-bold font-mono py-2 px-4 italic   mb-10">
                    🐟 Check Out Our Works Here!
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:flex flex-col justify-center  h-full  border-black">
            <h1 className="mt-10 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              We Came Up With 14 Ideas in 14 Days After We Got Married, and We
              Finished All of Them
            </h1>
            <p className="px-4 mt-10 text-black font-mono italic">
              Here&apos;s how it started: Last October, Jmill (now husband, then
              boyfriend) and I were visiting our friends Moises and Fabiola in
              Miami. While walking around their apartment complex, Moises said
              they were planning to organize an Internat Yami-ichi in January.
              We were immediately curious, and asked about what that is.
            </p>
            <p className="px-4 mt-10 text-black font-mono italic">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://yami-ichi.biz/"
                className="underline"
              >
                The Internet Yami-Ichi
              </a>{" "}
              originated in Tokyo, Japan in 2012 and was organized by an online
              internet art community called IDPW. It started because an iOS app
              made by a member of the club was rejected by Apple. It was
              rejected because it was not useful enough and/or entertaining
              enough for Apple users. As revenge, they decided to bring the
              internet to the real world. They wanted to create market where
              people interact face to face, and no one can tell you what you
              made isn&apos;t entertaining or useful. This event spread all over
              the world and was organized in a decentralized manner by various
              people. To organize a Yami-Ichi, all you need to do is to email
              the founders that you want to hold it, and they will put your
              event information and photos on the official website. Jmill&apos;s
              eyes lit up when he heard about this event, and although he
              couldn&apos;t participate in the Miami Yami-Ichi, he really wanted
              to make one happen at Mars College.
            </p>
            <p className="px-4 mt-10 text-black font-mono italic">
              Jmill and I got married at{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mars.college/"
                className="underline"
              >
                Mars College
              </a>{" "}
              on March 18th of this year. After a day of rest, we started
              organizing this event with Martians. We decided to hold it on
              April 1st, the third day of the Bombay Beach Biennale, when many
              tourists and artists come to the town. We had two weeks to find
              participants, make our own projects, and prepare the venue. Many
              thanks to Gene who provided the venue for free, Nico who helped
              set up the venue, Kirby who made a cool logo, Will who made a cool
              physical laser-cut sign, and all the artists who I will introduce
              below. These complete list of projects can be found on the{" "}
              <a className="underline " href="https://www.bbyi.fyi/">
                BBYI Website
              </a>
              .
            </p>
            <p className="px-4 mt-10 text-black font-mono italic">
              First of all, I would like to self-promote my work with Jmill.
            </p>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              This work is called Obsidian Vault, referencing the famous
              knowledge management software featuring linked notes. I picked up
              these obsidian stones on the roadside near Salton Sea. At that
              time I thought I could make something related to Obsidian Notes,
              but hadn&apos;t figured out how to present it. Eventually, the
              idea came up that people could write their notes on a purple
              post-it and exchange it for an obsidian rock. This project was so
              popular that we ran out of obsidian, but people were still writing
              notes. We had no choice but to pick up gravel from the yard to
              exchange their notes :P. We received so much interesting knowledge
              that we had to marvel at how varied the human brain can be. We
              even had some people write notes linked to other notes (see bottom
              right).
            </p>
            <div className="flex">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/2.1.jpeg"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/2.2.jpeg"
              />
            </div>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              The second project we did was called EitherRocks, which came from
              an OG NFT project called Ether Rocks. When I was exploring the old
              Navy site in Salton Sea, I risked being killed by a grenade and
              picked up a pile of transparent volcanic rocks called Gypsum.
              Jmill suggested that I could make a project related to Ether
              Rocks. Since most NFTs have traits to indicate rarity, we thought
              we could use Sims 1&apos;s personality traits on the rocks. We
              carefully scored the characteristics of each rock according to the
              five traits of Neat, Outgoing, Active, Playful, and Nice, and
              wrote them on the package. We were also able to map many of them
              them to people we know IRL. They almost felt alive to us now! In
              terms of why we call this work EitherRocks is because the player
              must blindly choose two rocks from the bag, open their eyes, and
              choose one of the rocks to take away. Either this rock or that
              rock. Hence, EitherRocks. Perhaps because it was too cryptic, only
              one of the visitors got the original reference.
            </p>
            <div className="flex ">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/3.1.png"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/3.2.jpeg"
              />
            </div>

            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              Next up is the work of Josh, a digital nomad who is super
              responsible and comfortable to communicate with. But he
              doesn&apos;t use social networking software at all and usually
              only communicates by email and text message. One of his projects
              was a free Facebook registration form for everyone to fill out.
              It&apos;s super detailed, focused, and intriguing. Only issue is
              that the registration turnaround time right now is around 12-15
              business days.
            </p>
            <div className="flex ">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/4.1.jpeg"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/4.2.jpg"
              />{" "}
            </div>

            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              Vincent is a &quot;multi-functional&quot; artist who is able to
              link software and hardware through the Touch Designer software. He
              set up an installation for the Yami-Ichi called Shadow Selfies,
              which I prefer to call an AI roasting machine. When you get close
              to the mirror, it automatically takes a picture of you and then
              uses OpenAI&apos;s GPT-3 to analyze your appearance, generate a
              paragraph to cyber-bully you and broadcast it in a robotic female
              voice
            </p>
            <div className="flex ">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/5.1.png"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/5.2.png"
              />{" "}
            </div>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              Karo, the author of the work on the left below, is a very healing
              artist. She specializes in fortune telling and has an amazing
              intuition and ability to calm people. Every time I interact with
              her, I feel like I&apos;m in a warm spa holding a mint-flavored
              cold drink. She bought two headphone headbands and made the
              headphone cups with obsidian and palm leaves respectively. I feel
              my brain will automatically shift into nature once I put them on.
            </p>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              The picture on the right is an AI chatbot booklet made by an ADHD
              biologist named Marzipan. He likes to do remix poetry with AI and
              text he wrote. His prompt for AI is one the highest quality
              prompts I&apos;ve ever seen, able to bring out the most unique and
              interesting side of AI. Mars College has four divisions,
              representing water, earth, fire and air. He gave Chatsubo, who
              represents the Fire God, a very hot character at last year&apos;s
              Mars College. Chatsubo is a bit of a cynical old man, speaking
              very directly, sometimes very rude, but with a very human touch.
              This booklet is a collection of conversations between Martians and
              Chatsubo. The asking price was a nugget of weed. There was one
              taker.
            </p>
            <div className="flex ">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/6.1.jpeg"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/6.2.jpeg"
              />
            </div>

            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              The Internet black market, of course, will have people who make
              digitally inspired food and treats. Over the years, there are
              those who make cookies, representing HTTP cookies, and those who
              make raspberry pies (Raspberry Pi). Our Yami-Ichi has Cursor
              Cookies. The author of this work is Chebel, an artist from Brazil
              who does everything from VR to film, and has recently been working
              with her partner Ygor on a very trippy but super engaging
              animation using AI. In the past she has helped local female sex
              workers in Brazil to sell soap to support themselves during the
              pandemic. Her work focuses on nature, animals, and women, those
              who are considered as non-mainstream characters. I really admire
              her work.
            </p>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              On the right is an Instagram Frame placemat. Jmill had the idea
              and I designed and created it. It&apos;s a very Meta piece (pun
              intended). This is also the first time I&apos;ve worked with a
              Chinese manufacturer. I was very excited when I received the test
              batch. I felt very accomplished seeing the idea come to fruition.
            </p>

            <div className="flex ">
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/7.1.jpeg"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/7.2.jpeg"
              />
            </div>

            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              Finally, the best sellers were these stickers. The first one is a
              FOMO spectrum meme sticker made by a Martian named Sam. Before
              coming to Mars, Sam was researching how to how to make museum
              exhibitions more interesting and engaging. She discovered that
              people can have not only FOMO but also JOMO (Joy of Missing Out).
              Then if you add the other two ends of the spectrum, there will be
              FOJI (Fear of Joining In) and JOJI (Joy of Joining In). JOJI is
              probably the best experience that people can have out of the four
              options.
            </p>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              The second is the BBYI logo designed by Kirby, whose art always
              has iridescent colors and trippy geometric shapes. The center of
              the logo is a fish bone, representing the dead fish bones on the
              polluted Salton Sea beach. The fish&apos;s eye is Apple&apos;s
              loading cursor.
            </p>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              The third is inspired by the anime Dennou Coil, where they use
              Japanese talisman papers to fix certain computer bugs. So I
              thought it would be cool if I do a Chinese version of it. If you
              stick it on your computer, it is proven to reduce computer bugs by
              30% :)
            </p>

            <div className="flex ">
              <img
                className="w-1/4 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/8.1.png"
              />
              <img
                className="w-1/4 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/8.2.png"
              />
              <img
                className="w-1/2 border-b-2 border-t-2 border-r-2 border-black"
                src="/drops/drop6/8.3.png"
              />
            </div>
            <p className="px-4 mt-10 text-black font-mono mb-6 italic">
              There are many more works not introduced here. You can go to the{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.bbyi.fyi/"
                className="underline"
              >
                BBYI website
              </a>{" "}
              to see the complete list. We learned many things from our first
              time hosting this event. Bombay Beach is a very gift-oriented
              place. It&apos;s a bit similar to the Burning Man Festival, where
              there is no money or commerce and all things are gift exchanges.
              One of the most popular works at our Yami-Ichi was the Obsidian
              Vault, which was free, interactive and everyone had a lot of fun
              collaborating with each other. This event also made me realize
              that if you have something you want to show to the world, people
              will help you to achieve it. But you have to believe that it will
              happen and execute the necessary steps. And given its low-stakes,
              low-expectation nature, this event also enabled a lot of people
              who are not artists to get involved and stimulate their
              creativity. We made a lot of &quot;useless&quot; stuff, but we
              attracted a lot of people who are just as weird as we are to
              appreciate our work. We may have not made any money, but we got a
              lot of psychologically enriching experiences which may be even
              more valuable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
