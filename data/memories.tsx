export interface Memory {
  id: number;
  title: string;
  content: string;
  location?: string;
  link?: string;
  tags: string[];
}

export const memories: Memory[] = [
  {
    id: 1,
    title: "Chiang Mai Flea Market",
    content:
      "We found a great flea market north of the Nimman area in Chiang Mai. Tons of cool antiques, dishes, and random junk for sale. We bought a bunch of dishes for some reason and got them all back safely to the US. Doggo passed on a really cool stone fly that he still thinks about sometimes.",
    location:
      "159 1366 Tambon Chang Phueak, Mueang Chiang Mai District, Chiang Mai 50300, Thailand",
    tags: ["Shopping", "Travel", "Thailand", "Antiques", "Market"],
  },
  {
    id: 2,
    title: "Fountain of Youth Flea Market",
    content:
      "We went with Bodhi and Rachel to a flea market at Fountain of Youth hot springs. Tons of retirees dumping cool stuff for cheap. We got pillows, blankets, camping gear, foam rollers, dishes, and so much more for the new house.",
    location:
      "159 1366 Tambon Chang Phueak, Mueang Chiang Mai District, Chiang Mai 50300, Thailand",
    tags: ["Shopping", "Home", "Friends", "Market"],
  },
  {
    id: 3,
    title: "Crispy pork at the Night Market",
    content:
      "One of our first street food experiences in Thailand at a night market near the university. A huge, delicious plate of crispy pork and kale with rice and egg for about $1.50 USD. Can't be beat.",
    tags: ["Food", "Travel", "Thailand", "Street Food", "Market", "Budget"],
  },
  {
    id: 4,
    title: "Slice of Era & Feminist Calendar",
    content:
      "We got some amazing things from indie creators from China - a deck of cards with staples of modern urban millenial life with a connection/storytelling game, and a feminist calendar. Doggo uses the Slice of Era deck in his tarot readings now.",
    tags: ["Shopping", "Art", "Games", "China"],
  },
  {
    id: 5,
    title: "A busy day in Williamsburg",
    content:
      " Cutie was messaged an old friend she hasn't seen since leaving China randomly, we were all in Virginia. We had an amazing day together in Williamsburg. We saw the governor's mansion, saw synths in a music museum, and tasted mead and honey at a meadery.",
    tags: ["Friends", "Travel", "Virginia", "Music", "Food", "Adventure"],
  },
  {
    id: 6,
    title: "Vegetarian restaurants in Thailand",
    content:
      "Unexpectedly delicious vegetarian food for two that rarely eat vegetarian. Crispy, spicy tofu and delicious smoothies.",
    tags: ["Food", "Thailand", "Vegetarian", "Restaurant"],
  },
  {
    id: 7,
    title: "Forest night market at Edge Lann",
    content:
      " Some homies put together a night market in the forests outside of Healdsburg for Edge Lanna. Delicious food, a solar A-frame to charge the batteries, and music from Nico and Alaska. A chef at one of the booths traded *food* for a 1 minute version of your life story.",
    tags: ["Market", "Food", "Music", "Community", "Nature", "Night"],
  },
  {
    id: 8,
    title: "Eating bayberries in the Bay",
    content:
      "Cutie finally got to taste bayberries again, she hasn't had them since she was a child in her hometown. Delivered from Weeee, $50/lb. Please grow more of them California!",
    tags: ["Food", "Nostalgia", "California"],
  },
  {
    id: 9,
    title: "Bali Traditional Spa Day",
    content:
      "We had a nice spa day together at the Bali Traditional Spa in Ubud. Highlight was a bathtub full of flower petals at the end for the two of us.",
    tags: ["Spa", "Wellness", "Bali", "Date", "Relaxing"],
  },
  {
    id: 10,
    title: "Thai Massages in Chiang Mai",
    content:
      "There were massage shops on basically every street in Chiang Mai, and an hour was usually $8-10. Doggo could really use one right now, to be honest.",
    tags: ["Spa", "Wellness", "Thailand", "Budget", "Relaxing"],
  },
  {
    id: 11,
    title: "Beach days in Bali",
    content:
      "We took a long car ride down to the white sand beaches of Denpassar. We played in the surf together and felt so carefree. We are definitely water creatures.",
    tags: ["Beach", "Nature", "Bali", "Adventure", "Date"],
  },
  {
    id: 12,
    title: "Physical Intensity on the SF Coastline",
    content:
      "On the 4th of July, we took a trip to picnic and hike on the Bay Area cliff-covered coast. When cutie doesn't want to walk, Doggo chants: 'Physical. Intensity. Physical. Intensity.'",
    tags: ["Hiking", "Nature", "California", "Date", "Adventure"],
  },
  {
    id: 13,
    title: "Festival of Lights at Lewis Ginter Botanical Garden",
    content:
      "Took a trip to see the lights at the Botannical Gardens in Richmond. Doggo hasn't been since he was a kid. We saw a Pikachu, a giant parrot, and about 5 minutes of snow!",
    tags: ["Art", "Nature", "Virginia", "Date", "Night"],
  },
  {
    id: 14,
    title: "Cafe Bosna at the Biennale",
    content:
      "A mainstay of the Bombay Beach Biennale. An all-night cafe that plays dope world house music, a DJ that plays instruments along with the music, and a turkish coffee circle at the front of the dance floor. And a robot that will give you a hug if you get close.",
    tags: ["Coffee", "Music", "Art", "Mars", "Night", "Party"],
  },
  {
    id: 15,
    title: "Board Games at Victory Point Cafe",
    content:
      "Our stress relief from the doomed startup in Berkeley. We went to Victory Point, drank beers, and learned games like *Ship game* and Quest for El Dorado.",
    tags: ["Games", "Berkeley", "Date", "Fun"],
  },
  {
    id: 16,
    title: "Sweet potato fries & gyoza from the Costco freezer",
    content:
      "Our favorite grocery discoveries of the year. We ate lots of sweet potato fries and crispy gyoza after the gym.",
    tags: ["Food", "Shopping", "Cozy"],
  },
  {
    id: 17,
    title: "Obsidian Vault at the Manifest Night Market",
    content:
      "We asked people to trade a piece of knowledge for a piece of Obsidian at the manifest night market. We drove 3 hours to the north and back the night before to collect Obsidian on *something* road because we couldn't afford the stuff at the crystal shop. That's commitment to the bit.",
    tags: ["Market", "Adventure", "Community", "Night"],
  },
  {
    id: 18,
    title: "The Potato",
    content:
      "Roommate's guinea pig at the apartment we stayed in during our time in Berkeley. It had a name, but we never remembered it and just called him Potato. He kept us sane through the startup grind. Doggo could watch him eat cucumbers forever.",
    tags: ["Pets", "Berkeley", "Cozy"],
  },
  {
    id: 19,
    title: "Foraging mustard greens on Mars",
    content:
      "Camille took us foraging for mustard greens in the Martian deserts. It was greener than I've ever seen after the great rain. We fried it up with some chickpeas and had a struggle meal for the ages.",
    tags: ["Food", "Nature", "Mars", "Friends", "Adventure"],
  },
  {
    id: 20,
    title: "Cat Cafe in Nimman",
    content:
      "We went to a cat cafe in the nimman area to hang out with dozen of round-faced kitties. Cutie had a shopping bag that created some incredible cat drama, and we saw a cat wearing a neck pillow. That's cozy.",
    tags: ["Cafe", "Pets", "Thailand", "Cozy"],
  },
  {
    id: 21,
    title: "Redoing the floors at Pluto",
    content:
      "We got the house at Mars, but the floors had nasty carpets that smelled like cat pee and made the place unlivable. Bodhi and Rachel helped us rip it all out, and Pops and Uncle Mark came to town to help put in the new flooring. Thank y'all so much. 🫡",
    tags: ["Home", "Mars", "Family", "Friends", "DIY"],
  },
  {
    id: 22,
    title: "Herbs in the nose",
    content:
      "One of the best photos of the year. We were at the farm in Ojai, and we put Sage in our noses because...benefits? Doggo thinks he sneezed his out.",
    tags: ["Fun", "Nature", "Friends", "California"],
  },
  {
    id: 23,
    title: "Getting the last copy of MSCHF's Nothing is Sacred",
    content:
      "We went to MSCHF's gallery opening in LA. The opening itself was just okay, but the real memorable moment was getting the last copy they had of the Nothing is Sacred book. It's sitting on a bartop like a bible on a pulpit. We still stan MSCHF.",
    tags: ["Art", "LA", "Shopping"],
  },
  {
    id: 24,
    title: "Coffee at the Hidden Cafe",
    content:
      "Our favorite spot to work in Berkeley. Good coffee, a cozy semi-open indoor space with a long table for working, and a nice green space outside for cuddling afterwards.",
    tags: ["Coffee", "Work", "Berkeley", "Cozy", "Date"],
  },
  {
    id: 25,
    title: "Bunny ear cactus growing after the flood",
    content:
      "A seemingly dead cactus in our yard came back to life after the great rains on mars. It sprouted new pups and opened yellow flowers. Life in the harsh desert.",
    tags: ["Nature", "Mars", "Home"],
  },
  {
    id: 26,
    title: "The Mars Hackathon & AI Nomic",
    content:
      "Doggo organized his first hackathon at Mars this year. Several people made cool projects with Eden. Doggo made an AI version of the Nomic game, and the winner Milton made an AI autobattler. Vincent debuted his prompt battle game after the demos, and it was an all-around impressive night of AI games.",
    tags: ["Tech", "Games", "Community", "Mars", "Hackathon"],
  },
  {
    id: 27,
    title: "Making coffee kombucha",
    content:
      "Cutie bought a book from the Noma chefs about fermentation. We move around too much to try most of this stuff, but we did order a SCOBY and made a delicious batch of coffee kombucha. Would recommend mixing with a good bourbon.",
    tags: ["Food", "Coffee", "DIY", "Learning"],
  },
  {
    id: 28,
    title: "Doggo's tarot birthday dinner",
    content:
      "Cutie made Doggo the most epic meal for his birthday. 7 dishes and a drink, each based on a Major Arcana tarot card. Doggo feels it's one of the most special things anyone has ever done for him and will remember it forever.",
    tags: ["Food", "Birthday", "Date", "Special"],
  },
  {
    id: 29,
    title: "Puzzle hunt at LessOnline",
    content:
      "The mad geniuses put together an epic IRL puzzle hunt at LessOnline. We got the first set of puzzles as a team, and then joined a bigger team as we learned the puzzle boxes in the courtyard were just the beginning. The Map is Not the Territory, for sure.",
    tags: ["Games", "Community", "Adventure", "Learning"],
  },
  {
    id: 30,
    title: "A night at Ojai permaculture farm",
    content:
      "We went to our friend's permaculture farm in Ojai to spend the night. We didn't check the weather, wore shirts and t-shirts, and found out it was below freezing that night. Fortunately we skipped the tent and slept in the living room with the wood stove burning. Cozy.",
    tags: ["Nature", "Friends", "California", "Adventure", "Cozy"],
  },
  {
    id: 31,
    title: "Doggo's bakery serves matcha koko and triple berry cake",
    content:
      "Doggo made Cutie a triple berry cake for our anniversary and a Koko Matcha cake for her birthday. We don't do sweets too often, but when we do, we do them right.",
    tags: ["Food", "Birthday", "Date", "DIY"],
  },
  {
    id: 32,
    title: "Surf and turf in the Puma trailer",
    content:
      "We got our bougie on and made surf and turf with steak and king crab in the Puma trailer for New Years. Juxtaposition at its finest.",
    tags: ["Food", "Celebration", "Cozy"],
  },
  {
    id: 33,
    title: "Evening at the North Gate Jazz Club",
    content:
      "We spent an evening checking out the famous North Gate Jazz Club in Chiang Mai. We learned that it existed from an amazing local guidebook we randomly found at a book store. Amazing music from amazing local musicians.",
    tags: ["Music", "Thailand", "Night", "Date"],
  },
  {
    id: 34,
    title: "Selling & buying brainfarts at the Edges market",
    content:
      "Edge Lanna had a community currency experiment called Edges, and you know we love our experimental markets. We sold tarot readings, vague prophecies, and bought tamarinds, chopsticks, and bad advice.",
    tags: ["Market", "Community", "Fun", "Thailand"],
  },
  {
    id: 35,
    title: "Shopping for infinite bags in Chiang Mai",
    content:
      "Cutie found bags galore in Thailand. Round bags, coconut bags, small bags, big bags, and multicolor bags. Most of them broke pretty quickly, we do know a little something about bagholding.",
    tags: ["Shopping", "Thailand", "Fun"],
  },
  {
    id: 36,
    title: "First morning walk in Chiang Mai",
    content:
      "Still a little jetlagged, we went for a long walk the first morning we were in Chiang Mai. It was still a little bit flooded from the recent rains, and we trekked through the dust and mud before the city was awake. It was a very different world to process.",
    tags: ["Adventure", "Thailand", "Nature", "Walking"],
  },
  {
    id: 37,
    title: "Ice bath at the Cocoon",
    content:
      "We took a daytrip to the Cocoon Spa in southern Chiang Mai. The group did a yoga and breathwork session to prepare for the open air ice bath. Doggo only did a minute or so but Cutie did the full three minutes like a champ.",
    tags: ["Wellness", "Thailand", "Adventure", "Spa"],
  },
  {
    id: 38,
    title: "Jack & Steve fixing Pluto's water and electricity",
    content:
      "Our house on Mars had...problems. Fortunately Bombay Beach has a number of experts who were willing to fix. Shoutouts to Jack and Steve for help with the plumbing and electricity 🫡",
    tags: ["Home", "Mars", "Community", "DIY"],
  },
  {
    id: 39,
    title: "Buying a whole jackfruit in Bali",
    content:
      "We were going to buy a pack of jackfruit in Bali, then we decided nah, let's just buy the whole jackfruit so we know it's fresh. Doggo carries an 18lb jackfruit home in his arms, and we got gum all over ourselves opening and cutting it. But the payoff was worth it, it was delicious and we ate it for days.",
    tags: ["Food", "Bali", "Adventure", "Fun"],
  },
  {
    id: 40,
    title: "Thailand 7-11s (the temple)",
    content:
      "If you've been to Thailand, it's hard not to notice the sheer number of 7-11s. We had one right outside our hotel in Chiang Mai and bought protein shakes, onigiri, cat food, bug spray, medicine, snacks, and even ginger soap. We affectionately dubbed it 'the temple'.",
    tags: ["Shopping", "Thailand", "Food", "Convenience"],
  },
  {
    id: 41,
    title: "The Bangkok mall aquarium",
    content:
      "We only had one real day for tourism in Bangkok, and we decided to go the aquarium. It was in the basement of one of Bangkok's many giant shopping malls. Lots of tropical fish we'd never seen since Thailand is near the reefs, and a tunnel with sharks and manta rays.",
    tags: ["Nature", "Thailand", "Adventure", "Date"],
  },
  {
    id: 42,
    title: "Paradai chocolate and Doggo's ATM run",
    content:
      "Cutie wanted to try Paradai chocolate since she heard it was amazing. The main store was closed, so we went to a smaller store. They were cash only and we were out of cash. We had reservations elswhere coming up soon, so Doggo did a heroic run in the heat up and down the block to find a working ATM, and got back just in time. The chocolate was incredible, we got bonbons, bars, and a cold drinking chocolate.",
    tags: ["Food", "Thailand", "Adventure", "Shopping"],
  },
  {
    id: 43,
    title: "The Gelato Lab in Berkeley",
    content:
      "We've become ice cream snobs and tend to be unimpressed with most ice cream. The Gelato Lab in Berkeley was one that was actually worth going back to. Perfect texture, great flavors, and you can tell it's made with high quality ingredients.",
    tags: ["Food", "Berkeley", "Ice Cream", "Date"],
  },
  {
    id: 44,
    title: "Groceries at the La Quinta Costco",
    content:
      "It's hard to get food on Mars. The nearest grocery store, Winco, is a 40 minute drive. We upgraded this year, and drive an hour for the La Quinta Costco instead. Makes it much easier to buy two weeks worth of food for two at a time.",
    tags: ["Shopping", "Food", "Mars", "Adventure"],
  },
  {
    id: 45,
    title: "Day trips to Wekiva Springs",
    content:
      "One of our favorite things to do at home is to make trips to swim in the Florida springs. The closest one to home is Wekiva Springs. We pronounce it Wehkee-Wa, it's a lot more fun to say that way. Doggo carries cutie like an Otter in the cold water. (bars)",
    tags: ["Nature", "Florida", "Adventure", "Date", "Swimming"],
  },
  {
    id: 46,
    title: "Buying plants at Growing Together nursery",
    content:
      "The plant plug in Orlando is Growing Together nursery, near Blue Springs to the north. We found it randomly last year, and started our gardening adventure with the plants we bought there, and we got another round this year. The plants from there seem to consistently thrive with very little maintinance. 🌱",
    tags: ["Nature", "Shopping", "Florida", "Home", "Plants"],
  },
  {
    id: 47,
    title: "Fancy coffees at Self Cafe",
    content:
      "Our favorite cafe in Chiang Mai was Self Cafe, a short walk from the breakfast venue. They make fancy fermented coffee drinks (though the one Cutie wanted most was always sold out), a good working vibe, and consistently good music. (rare for a coffee place)",
    tags: ["Coffee", "Thailand", "Work", "Music"],
  },
  {
    id: 48,
    title: "Chef's Together breakfast buffet",
    content:
      "Edge City Lanna was a different adventure every day, but it almost always started with breakfast with friends at Chef's Together. A delicious omelette, baked potatoes and spinach, a plate of raw vegetables (rare to find in Thailand), and a bit of tropical fruit.",
    tags: ["Food", "Thailand", "Community", "Friends"],
  },
  {
    id: 49,
    title: "Buying a whole wardrobe at the Coconut Market",
    content:
      "Cutie bought a whole new wardrobe of handmade indigo dye pattern clothes from a shop at the Coconut Market in Thailand. Cheap and stylish, she constantly gets compliments on them.",
    tags: ["Shopping", "Thailand", "Market", "Fashion"],
  },
  {
    id: 50,
    title: "Flower jewelery from Chiang Mai",
    content:
      "Handmade jewelry with actual sealed flowers. Cutie bought a red flower necklace for mom's Christmas present and a pair of gorgeous orchid earrings for herself. The flowers are sealed in resin, and the jewelry is made by a local female artist in ROC Ban Boran (Nature to Treasure), Chiang Mai.",
    tags: ["Shopping", "Thailand", "Art", "Gifts"],
  },
  {
    id: 51,
    title: "Jen Moy - Local Thai Restaurant",
    content:
      "We went with the art residency group to a place called Jen Moy. Despite there being hundreds of thai restaurants around, we went there because it comes up on Google Maps when you search 'Thai restaurant'. They had the best Crying Tiger in town with special sauce made of tamarind, and we went back several times.",
    tags: ["Food", "Thailand", "Restaurant", "Friends"],
  },
  {
    id: 52,
    title: "Getting DB's AC and windshield quickly fixed",
    content:
      "DB (our car) had her share of problems this year - a cracked windshield and a busted AC. Fortunately we were in the bay, the land of broken cars, and we got them quickly and cheaply fixed each time.",
    tags: ["Car", "Maintenance", "Berkeley"],
  },
  {
    id: 53,
    title: "Climbing at the Bay Area gyms",
    content:
      "Touchstone Climbing is the parent company for most of the climbing gyms in the Bay Area. We rarely stay in one place for very long that also has access to a climbing gym, so we took advantage while we were there. Climbing is the only exercise we can both manage to do consistently.",
    tags: ["Climbing", "Exercise", "Berkeley", "Fun"],
  },
  {
    id: 54,
    title: "Shopping at Berkeley Bowl",
    content:
      "The Berkeley Bowl grocery store in Berkeley is the best grocery store we've ever been do. All of the fresh produce you could ever want, stuff you'd never find in big chain grocery stores. Sushi grade fish, and delicious snacks and sauces. We miss it while we're living elsewhere.",
    tags: ["Shopping", "Food", "Berkeley", "Grocery"],
  },
  {
    id: 55,
    title: "Relaxing at the Wi Spa",
    content:
      "The Wi Spa in LA was our overnight home several nights this year. It's a traditional Korean Spa with a mineral bath and dry saunas. Day passes are cheap and you can stay overnight for a small extra fee. Better than a hotel for a one night stop for sure.",
    tags: ["Spa", "LA", "Wellness", "Relaxing"],
  },
  {
    id: 56,
    title: "Tarot reading at the LA Afterburn",
    content:
      "At the LA Afterburn, we got a reading from a really cool woman at a booth there. She had a custom made deck, and our reading matched our life story uncannily.",
    tags: ["Spiritual", "LA", "Community", "Art"],
  },
  {
    id: 57,
    title: "Korean food in LA",
    content:
      "Hanbat Shul Lung Tang in LA was one of our standout food experiences of the year. It's a beef soup served with rice and the traditional Korean fermented veggie sides. It's food that dares to be simple when restaurants serve fancier and louder food to try and get business.",
    tags: ["Food", "LA", "Restaurant", "Korean"],
  },
  {
    id: 58,
    title: "A meal at n/naka",
    content:
      "Doggo took Cutie to n/naka for her birthday, their first trip to a Michelin Star restaurant together. Cutie wanted to go there in particular since it's headed by Niki Nakayama, a female head chef. The meal was incredible, every taste was amazing. Highlights were the appetizer plate, the nigiri course, and especially the sweet corn ice cream dessert.",
    tags: ["Food", "LA", "Date", "Special", "Birthday"],
  },
  {
    id: 59,
    title: "Watching Kaiji together at mealtime (ZAWAAAA)",
    content:
      "Cutie and Doggo both loved anime before they met, and now we often watch anime together at mealtime. Our standout from this year was the second season of Kaiji: Ultimate Survivor, because Doggo is a gambling degen. It has given us a ton of inside jokes and memes. ZAWAAAAAAA.",
    tags: ["Anime", "Cozy", "Fun", "Date"],
  },
  {
    id: 60,
    title: "Bookstores in Thailand",
    content:
      "We found an amazing book called Moments in Thailand in Chiang Mai. This book is a collection of sketches of cool places you can visit in Thailand. There's also a cool Chinese bookstore with a lot of indie books, zines, and trinkets called 飛地書店 Now Here Book Store, where I bought a bunch of books!",
    tags: ["Shopping", "Books", "Thailand", "Art"],
  },
  {
    id: 61,
    title: "Doggo getting all of Cutie's pizza crust",
    content:
      "Doggo loves pizza. Cutie will eat pizza, but doesn't usually want to eat the crust. That means Doggo got a long of extra pizza crust this year, which he will always eat. That's couple synergy.",
    tags: ["Food", "Pizza", "Cozy", "Fun"],
  },
  {
    id: 62,
    title: "Cutie got her green card!",
    content:
      "Cutie can leave the country now, which she has not done since she was a child. After we got married we had no idea how long the wait would be for the Green Card, but Cutie got it pretty quickly. Thailand was our first out-of-country travel together.",
    tags: ["Milestone", "Travel", "Special"],
  },
  {
    id: 63,
    title: "Gentle Air & smooth plane flights",
    content:
      "Cutie is afraid of flying, but for the most part this year we had incredibly smooth plane flights with very little troubles on the plane or at the airport. Cutie made a 6 song playlist called Gentle Air and listens to it on repeat for the whole flight.",
    tags: ["Travel", "Music", "Adventure"],
  },
  {
    id: 64,
    title: "Saving our backyard farm from the hurricane",
    content:
      "A big hurricane hit Florida right after we left for Thailand. It wrecked our backyard and uprooted many of the trees and plants. We got on a facetime call with Mommy and Eddie and they helped get the plants back into the ground afterwards. Grateful 🙏",
    tags: ["Home", "Nature", "Family", "Florida"],
  },
  {
    id: 65,
    title: "An evening in the ChillDome",
    content:
      "The party highlight of the Mars Midterm was our night in the ChillDome. An alternative to the usual Mars party, Jordan and others built a dome out of wood and plastic, set up cozy mattresses and sleeping bags, and DJs played chill music all night. That's Juicy's kind of party - a nap party.",
    tags: ["Party", "Mars", "Music", "Cozy", "Community"],
  },
  {
    id: 66,
    title: "Museum of Mars opening night",
    content:
      "The main event of the Mars Midterm party this year was Charles's Museum of Mars project. It was a low-stakes, decentralized museum where anyone could contribute something they felt represented Mars/Bombay Beach. There was everything from driftwood to maps to grocery receipts, and we found a copy of our marriage certificate in the time capsule opening.",
    tags: ["Art", "Mars", "Community", "Party"],
  },
  {
    id: 67,
    title: "Fibonacci Tarot Readings",
    content:
      "The night before the Edges market, Doggo came up with a brilliant new idea - Fibonnaci Tarot readings. The first card costs 2, the second costs 3, the third costs 5, and so on. Doggo would leave each card on a cliffhanger and try and sell the next card. It was pretty legendary. The high score was 50 edges for someone who felt their reading was life-changing.",
    tags: ["Spiritual", "Market", "Fun", "Community"],
  },
  {
    id: 68,
    title: "The Dumb Pitch Competition at Manifest",
    content:
      "At Manifest, there was a high profile startup pitch competition. We decided to play with this and hosted a dumb startup pitch competition. The fund was a 10 Chinese Yuan bill we found where we were sitting, and we passed it back and forth between the entreprenurs who showed up to pitch innovative businesses such as an inter-office gambling platform for tax CPAs.",
    tags: ["Fun", "Community", "Tech", "Party"],
  },
  {
    id: 69,
    title: "Airdrops & randomly finding coins in old wallets",
    content:
      "The crypto market came back this year. Uh...we are grateful for old wallets and generous airdrops. 🪙",
    tags: ["Crypto", "Money", "Lucky"],
  },
  {
    id: 70,
    title: "Dim Sum on the company card",
    content:
      "We took several business lunches while going through Berkeley Skydeck. Eating delicious dim sum and sichuanese in the bay to discuss strategy together is always better than doing it on an empty stomach.",
    tags: ["Food", "Work", "Berkeley", "Business"],
  },
  {
    id: 71,
    title: "Feeding Milk Kitty",
    content:
      "Milk Kitty is a grey and white kitty that showed up at our house at Mars. She was too shy to ever come close enough to be pet, but she did come around every day when we started feeding her. We love you Milk Kitty!",
    tags: ["Pets", "Mars", "Home", "Cozy"],
  },
  {
    id: 72,
    title: "Private class at Basil Culinary School",
    content:
      "We took a culinary school in Chiang Mai. We signed up for one on the day it reopened after the floods, and we were the only ones there for that time slot so we got a private lesson. We learned to shop the markets and make six dishes each. Highlights were the from-scratch curries and toasted coconut sticky rice.",
    tags: ["Food", "Learning", "Thailand", "Cooking"],
  },
  {
    id: 73,
    title: "C's muffins",
    content:
      "C made muffins every day at biennale to deliver to the BBAC cafe. Doggo has a soft spot for muffins, and C was always coming up with weird flavors like Cranberry Bacon or Pistachio Lemon. Doggo had to stop himself from having too many.",
    tags: ["Food", "Mars", "Community", "Baking"],
  },
  {
    id: 74,
    title: "Nappu at Nap Dance",
    content:
      "We found the best coffee in Chiang Mai at a place called The Coffee Club. It's a small chain with a bunch of locations, and the coffee was amazing. We went there every day for a long time.",
    tags: ["Coffee", "Thailand", "Cozy"],
  },
  {
    id: 75,
    title: "Circus and Gypsy jazz at Biennale",
    content:
      "At Biennale this year, the production level was upped tremendously. Stefan brought in Las Vegas level acrobats to perform a circus, with handstands and fire dancing. And in between performances, a Gypsy Jazz band played banger music underneath the big top tent.",
    tags: ["Art", "Music", "Mars", "Performance", "Party"],
  },
  {
    id: 76,
    title: "Introverse at the Chinese bookstore",
    content:
      "After 16 months of work, we finished it! Our biggest project to date: a connection card game we'd been working on since mid 2023. Formerly known as EIBG, we came up with the new name the day before we printed. We got a small first print run made of 100 copies and sold...some of them. In October, our friend is opening a Chinese bookstore at a cool spot in the SF Chinatown. He is still renovating the space ahead of the opening, but is hosting community events already. He let us host a playtest of Introverse, and almost everyone who showed up had so much fun they bought a copy. It was very validating.",
    tags: ["Games", "Community", "Business", "Achievement", "San Francisco"],
  },
  {
    id: 77,
    title: "Care at the Chiang Mai hospital",
    content:
      "Doggo got bad food poisoning from some softshell crab in Chiang Mai. We didn't have insurance and were worried how much an ER visit was going to cost. The visit was fast and the total cost was only $12 for visit and medication. We were grateful for the care we received.",
    tags: ["Health", "Thailand", "Budget", "Medical"],
  },
  {
    id: 78,
    title: "The best falafel at Hummu",
    content:
      "Hummus is a mediterranean restaurant in Chiang Mai with 4.9 stars over thousands of reviews. Thailand is not where we expected to have the best Mediterranean food we've ever tasted. The most delicious falafel, hummus, curry shakshuka, homemade pickles, and pistachio yogurt desserts.",
    tags: ["Food", "Thailand", "Restaurant"],
  },
  {
    id: 79,
    title: "Kittens at the Chiangmai Inn Guesthouse",
    content:
      "Two small kittens showed up at the guesthouse we stayed at in Chiang Mai. A grey one showed up first, and an orange after. We bought some cat food at the nearby 7-11 and started feeding them and even took them into our room to snuggle sometimes. I wanna kittieeeeeeeeeee...",
    tags: ["Pets", "Thailand", "Cozy", "Fun"],
  },
  {
    id: 80,
    title: "Daytrip to the Temples",
    content:
      "The art residency group at Edge Lanna took a tourist day trip to see the famous northern temples. We saw the White Temple, the Black Temple, and the Blue Temple. We left wishes for each under in the metal tree at the White Temple. Doggo's favorite part was the sea of hands at the White Temple and the demon furniture at the Black Temple.",
    tags: ["Travel", "Thailand", "Art", "Culture", "Adventure"],
  },
  {
    id: 81,
    title: "Tara's Feldenkrais classes",
    content:
      "Tara is a Feldenkrais practitioner that lives in the Chiang Mai hills. We went to her to each get a 1:1 appointment, then we came back for her group classes the next two Sundays. Group Feldenkrais is like super lazy yoga, or an active nap. It makes time pass very quickly.",
    tags: ["Wellness", "Thailand", "Learning", "Relaxing"],
  },
  {
    id: 82,
    title: "A box of free oranges in LA",
    content:
      "In the rich parts of LA, everyone has fruit trees. Oranges and lemons everywhere. We were on a walk while staying at our friend's place there and found a delicious box of free oranges on the sidewalk, and we got some kumquats from a nearby tree that we made ice cream with.",
    tags: ["Food", "LA", "Nature", "Lucky"],
  },
  {
    id: 83,
    title: "Cherries and mulberries from our trees",
    content:
      "We planted Jamaican cherry and Mulberry trees in our yard in Florida last year, and we got fruit from them in the first summer this year. The Jamaican cherries taste like cotton candy and the mulberries are small, and you never know if they'll be sweet or sour. We will be eating them for years to come.",
    tags: ["Food", "Nature", "Florida", "Home", "Garden"],
  },
  {
    id: 84,
    title: "Pizza slices from all our favorite spots",
    content:
      "Doggo really loves pizza. We didn't eat that much pizza this year, but we do have some favorite spots and memories. Shoutouts to Lazy Moon, Mary Angela's, Antica Pizzeria, and even the pizza party at Pluto before we left Mars.",
    tags: ["Food", "Pizza", "Travel", "Community"],
  },
  {
    id: 85,
    title: "Hacking Mirage Garage at Edge Esmerelda",
    content:
      "Doggo had an idea for making an AI crafting roguelike game. He built a couple of toy prototypes, then we built a relatively complete version at the Edge Esmerelda Hackathon. We didn't win any prizes at this one, but Doggo still thinks this project is really cool.",
    tags: ["Tech", "Games", "Hackathon", "Community"],
  },
  {
    id: 86,
    title: "Sound healing at the Pyramids of Chi",
    content:
      "We took a tourist day in Ubud to do a bunch of cool hippie things there. The standout was the sound healing session at the Pyramids of Chi. We think it was transformational even though we actually both just took really good naps. The smoothie bowls afterwards were delicious.",
    tags: ["Wellness", "Bali", "Spiritual", "Relaxing"],
  },
  {
    id: 87,
    title: "Mead at the Heidrun Meadery",
    content:
      "We went to a meadery in the California wine country. This meadery is special because they both do beekeeping to make their honey, and also brew the mead with a champagne-like process. There was a big tree we sat underneath and spent the day with Doggo's parents, who happened to be in the area.",
    tags: ["Food", "California", "Family", "Date"],
  },
  {
    id: 88,
    title: "Coffee and chocolate from Skugga Estates",
    content:
      "One of the weekly Edge Lanna dinners was at a place outside of Chiang Mai called Skugga Estates. They produce the most delicious single-origin coffee and chocolate. The coffee we bought there may be the best coffee Doggo has ever tasted.",
    tags: ["Coffee", "Food", "Thailand", "Community"],
  },
  {
    id: 89,
    title: "Journals and stickers for Cutie",
    content:
      "Cutie found much joy this year in journaling and collecting stickers. She did journal & sticker shopping trips in Chiang Mai, got tons of cool stickers from Devcon, and completely filled her sticker book.",
    tags: ["Shopping", "Art", "Thailand", "Fun"],
  },
  {
    id: 90,
    title: "Doggo's cool clothes from the Florida Vintage Market",
    content:
      "The Florida Vintage Market is an event that runs in Orlando 3 times a month. It is the best vintage market Doggo has ever been to, and he found tons of cool and rare shirts there this year. 💧",
    tags: ["Shopping", "Fashion", "Florida", "Market"],
  },
  {
    id: 91,
    title: "Getting a home on Mars",
    content:
      "We got a place on Mars this year! Formerly Earth, now Pluto. Doggo had to overcome obstacle after obstacle since starting the deal in mid 2023, but we finally got it in February 2024 🪐",
    tags: ["Home", "Mars", "Achievement", "Milestone"],
  },
  {
    id: 92,
    title: "Spicy Sichuanese at Chili Spot",
    content:
      "Orlando punches above its weight for food because of all the international tourism. Our favorite place is an authentic Sichuanese place near Disney World called Chili Spot. Cauliflower dry pot, green beans, cumin lamb, chongqing chicken, and braised fish. 🤤",
    tags: ["Food", "Florida", "Restaurant", "Chinese"],
  },
  {
    id: 93,
    title: "Smoothies everywhere in Thailand",
    content:
      "There were cheap smoothies everywhere you went in Thailand. Fresh fruit, yogurt, ice, and little added sugar. It was hot there, so they helped get you through the day.",
    tags: ["Food", "Thailand", "Drinks", "Budget"],
  },
  {
    id: 94,
    title: "Ice cream dates at Koko Kakigori",
    content:
      "Koko Kakigori is a new place that popped up in Orlando run by a friendly couple that serves shaved ice. Every part of it is homemade with fresh ingredients. Ube coconut, ichigo matcha, and starfruit yuzu were our favorites. We went there most sundays we were home for an ice cream date.",
    tags: ["Food", "Ice Cream", "Florida", "Date"],
  },
  {
    id: 95,
    title: "Exceeded expectations at Devcon",
    content:
      "Cutie was a little low on crypto conferences after ETHDenver, and we weren't expecting much from Devcon. It turned out to be way better than we expected, the ground floor area was super vibey, the food was delicious, and there were a lot more things to do than just crypto talk. Would go back.",
    tags: ["Tech", "Crypto", "Community", "Thailand"],
  },
  {
    id: 96,
    title: "Endless stimulation at Edge City Lanna",
    content:
      "We got a little taste of Edge City from the Edge Esmerelda hackathon, and decided to do the full month at Edge City Lanna. It was an amazing experience where every day we had great conversations, did interesting things, and hung out with good friends. Edge City is creating something really special for people.",
    tags: ["Community", "Thailand", "Learning", "Friends"],
  },
  {
    id: 97,
    title: "House cleanup help at Bombay Beach",
    content:
      "Our house at Bombay Beach was absolutely full of junk, and it took weeks to move and get rid of it all. Shoutouts to Bodhi and Rachel for the help, and especially for hauling the last load to the dump after we left. 🙏",
    tags: ["Home", "Mars", "Community", "Friends"],
  },
  {
    id: 98,
    title: "Tidying up together in A Little to the Left",
    content:
      "A Little to the Left is a game Doggo bought, played for a bit, and put down. Cutie found it from an influencer, asked Doggo about it, and then we played it together. Super cozy game where we took turns solving its many tidying puzzles.",
    tags: ["Games", "Cozy", "Fun", "Date"],
  },
  {
    id: 99,
    title: "Solving the many puzzles of Tunic",
    content:
      "Tunic is a game Doggo was always interested in, but never got around to. During a particularly tough weekend in Berkeley, we decided to play it together. We spent long nights working together to solve its many puzzles. Incredible game, would recommend.",
    tags: ["Games", "Berkeley", "Fun", "Date"],
  },
  {
    id: 100,
    title: "Doggo stroking Cutie's hair",
    content:
      "We've done so many fast and exciting things this year, but it's important to be grateful for the slow moments too. Doggo always feels so peaceful and blissfully lost when he lays with Cutie and strokes her hair. ❤️",
    tags: ["Love", "Cozy", "Special", "Date"],
  },
  {
    id: 101,
    title: "Tons of prizes for WhaleChess at ETH Bangkok",
    content:
      "Our third hackathon of the year as BCAD, only a week after the Lanna Hackathon. We made WhaleChess, an onchain chess game with AI-generated custom pieces. This hackathon was extremely competitive, but we still won prizes from Polygon, Blockscout, and Mantle.",
    tags: ["Tech", "Hackathon", "Achievement", "Thailand"],
  },
  {
    id: 102,
    title: "2nd overall with WhoUp at the Lanna Hackathon",
    content:
      "Our second hackathon of the year as BCAD, we teamed up with Cutie's mentor Youyang and made WhoUp, an app to help you reprogram your doomscrolling. The super vibey aesthetics and concept ended up winning us 2nd overall, plus a prize from Metamask.",
    tags: ["Tech", "Hackathon", "Achievement", "Thailand"],
  },
  {
    id: 103,
    title: "Filipino Mahjong with the ladies at Kaya",
    content:
      "We watched a Mahjong anime together this year, and we enjoyed it but had no idea what was going on. At a food popup we went to in Orlando, there was a group playing, and a couple of older women taught us to play the Filipino version. Doggo was down bad but had a huge comeback to even.",
    tags: ["Games", "Learning", "Community", "Florida"],
  },
  {
    id: 104,
    title: "Going through Berkeley Skydeck",
    content:
      "We got into Berkeley Skydeck, a startup accelerator with less than 1% acceptance rate. We were working with a third cofounder, Adam, on a startup that automated tax prep. The startup itself didn't work out, but we both learned so much about entreprenurship from the experience.",
    tags: ["Tech", "Business", "Learning", "Berkeley"],
  },
  {
    id: 105,
    title: "The First Annual Mars Olympics",
    content:
      "People always talked about having a Mars Olympics, but it never actually happened. This year, Doggo worked with Nico to finally make the Mars Olympics happen. Unicycle relay, water pouring, coin stealing, a Martian memory challenge, and a pancake making contest to close it out.",
    tags: ["Community", "Mars", "Fun", "Games"],
  },
  {
    id: 106,
    title: "Chinese New Year hotpot in the trailer",
    content:
      "We spent Chinese New Year having hot pot with Bodhi, Nico, Will, and Sophia in Bodhi's trailer. We decided to have a much more low effort celebration this year after making food for all of Mars last year, and that was definitely the right decision. Good times with good friends.",
    tags: ["Food", "Friends", "Mars", "Celebration"],
  },
  {
    id: 107,
    title: "The best meals at Ancient Beef Thai Cuisine",
    content:
      "There was a restaurant right next to the breakfast venue in Thailand called Ancient Beef Thai Cuisine. Beef is fairly uncommon to eat in Thailand, and they made the best stewed beef dishes. A plate of beef with rice and veggies, or a noodle soup for $4-5. Every time we go out to eat in the US, we wish we were there instead.",
    tags: ["Food", "Thailand", "Restaurant", "Budget"],
  },
  {
    id: 108,
    title: "Making friends with Marina",
    content:
      "Juicy made a really good friend in Thailand! We spent a ton of our time at Edge Lanna hanging out with Marina, someone who is definitely on our spiritual wavelength. We started a fake hedge fund together and possibly committed financial crimes.",
    tags: ["Friends", "Thailand", "Fun", "Community"],
  },
];
