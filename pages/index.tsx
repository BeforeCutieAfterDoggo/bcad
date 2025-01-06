import Head from "next/head";
import Link from "next/link";

interface DropCard {
  id: string;
  emoji: string;
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
}

const drops: DropCard[] = [
  {
    id: "9",
    emoji: "🎊",
    title: "BCAD's Collected Adventure Drawings",
    description: "Presenting you our 108 special memories of the past year",
    image: "/drops/drop9.png",
    link: "/project/9",
    date: "Jan 2025",
  },
  {
    id: "8",
    emoji: "🤖",
    title: "Bast Captcha, Automation Defense",
    description: "Prove to me that you are a bot",
    image: "/drops/drop8.png",
    link: "/project/8",
    date: "Nov 2023",
  },
  {
    id: "7",
    emoji: "📦",
    title: "Box of Cards for Authentic Dialogue",
    description: "Emotional Intelligence Board Game",
    image: "/drops/drop7.png",
    link: "/project/7",
    date: "June 2023",
  },
  {
    id: "6",
    emoji: "🎮",
    title: "Biennale Convention for Acquiring Doodads",
    description: "Internet black market in Bombay Beach",
    image: "/drops/drop6.png",
    link: "/project/6",
    date: "Apr 2023",
  },
  {
    id: "5",
    emoji: "🥰",
    title: "Bonded Crowd Assessment Device",
    description: "Measuring the collective emotional intelligence of crowds",
    image: "/drops/drop5.png",
    link: "/project/5",
    date: "Mar 2023",
  },
  {
    id: "4",
    emoji: "🥤",
    title: "Bain x Coca-Cola: Advertisement Diffusion",
    description: "Exploring the spread of advertising through neural networks",
    image: "/drops/drop4.jpg",
    link: "/project/4",
    date: "Feb 2023",
  },
  {
    id: "3",
    emoji: "🔮",
    title: "Bella Coven, Automated Diviner",
    description: "AI-powered divination and fortune telling",
    image: "/drops/drop3.png",
    link: "/project/3",
    date: "Feb 2023",
  },
  {
    id: "2",
    emoji: "🍝",
    title: "Boring Code Achieves Deliciousness",
    description:
      "When algorithms meet cuisine - the intersection of code and cooking",
    image: "/drops/drop2/drop2.png",
    link: "/project/2",
    date: "Feb 2023",
  },
  {
    id: "1",
    emoji: "🍄",
    title: "Biochemical Creative Adventure Diary",
    description: "TRIP: A journey through biochemical creativity",
    image: "/drops/drop1.png",
    link: "/project/1",
    date: "Jan 2023",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>BCAD</title>
        <script
          defer
          src="https://umami-tawny-theta.vercel.app/script.js"
          data-website-id="2f689c74-a3c1-41af-b14a-010a28c4f01f"
        ></script>
      </Head>
      <main className="min-h-screen p-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drops.map((drop) => (
            <Link href={drop.link} key={drop.id} passHref>
              <div className="group cursor-pointer">
                <div className="flex justify-between mb-2">
                  <div className="bg-white px-3 py-1 rounded-full text-sm font-mono border border-black">
                    #{drop.id} {drop.emoji}
                  </div>
                  <div className="bg-white px-3 py-1 rounded-full text-sm font-mono font-bold">
                    {drop.date}
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg border border-black border-2">
                  <img
                    src={drop.image}
                    alt={drop.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-mono font-bold tracking-tighter">
                    {drop.title}
                  </h2>
                  <p className="text-gray-600 mt-2 font-mono tracking-tighter">
                    {drop.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
