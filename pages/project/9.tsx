import { useState, useMemo } from "react";
import { memories, Memory } from "../../data/memories";
type TagCategory = {
  name: string;
  tags: string[];
};

const tagCategories: TagCategory[] = [
  {
    name: "Places",
    tags: [
      "Thailand",
      "Bali",
      "Berkeley",
      "California",
      "Florida",
      "LA",
      "Mars",
      "San Francisco",
      "Virginia",
      "China",
    ],
  },
  {
    name: "Activities & Experiences",
    tags: [
      "Adventure",
      "Shopping",
      "Travel",
      "Work",
      "Walking",
      "Swimming",
      "Party",
      "Performance",
      "Hiking",
      "Exercise",
      "Climbing",
      "DIY",
      "Cooking",
      "Baking",
      "Learning",
      "Hackathon",
      "Games",
      "Anime",
    ],
  },
  {
    name: "Food & Drinks",
    tags: [
      "Food",
      "Coffee",
      "Restaurant",
      "Ice Cream",
      "Pizza",
      "Korean",
      "Chinese",
      "Street Food",
      "Vegetarian",
      "Drinks",
      "Grocery",
    ],
  },
  {
    name: "Lifestyle & Interests",
    tags: [
      "Tech",
      "Crypto",
      "Art",
      "Music",
      "Books",
      "Fashion",
      "Plants",
      "Pets",
      "Antiques",
      "Wellness",
      "Spa",
      "Spiritual",
      "Cozy",
      "Nature",
      "Garden",
    ],
  },
  {
    name: "Social & Special Moments",
    tags: [
      "Family",
      "Friends",
      "Community",
      "Date",
      "Birthday",
      "Special",
      "Love",
      "Fun",
      "Celebration",
      "Milestone",
      "Achievement",
    ],
  },
];

export default function ProductPage() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);

  // Get unique tags
  const uniqueTags = useMemo(() => {
    const allTags = memories.flatMap((memory) => memory.tags);
    return Array.from(new Set(allTags)).sort();
  }, []);

  // Filter memories based on selected tag
  const filteredMemories = useMemo(() => {
    if (!selectedTag) return memories;
    return memories.filter((memory) => memory.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative divide-y-2 divide-black">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="mt-2 font-mono italic block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl mx-4">
              What Juicy Did in 2024
            </span>
            <p className="text-center font-mono italic mt-2">108 Memories</p>
          </h1>
        </div>

        {/* Tags Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full text-sm w-fit ${
                  selectedTag === null
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setShowAllTags(!showAllTags)}
                className="px-3 py-1 rounded-full text-sm bg-gray-200 hover:bg-gray-300"
              >
                {showAllTags ? 'Hide Tags' : 'View All Tags'}
              </button>
            </div>

            {showAllTags && (
              <div className="mt-4 space-y-4">
                {tagCategories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <h3 className="font-bold text-gray-700">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(tag)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            selectedTag === tag
                              ? "bg-black text-white"
                              : "bg-gray-200 hover:bg-gray-300"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grid Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 mt-4">
            {filteredMemories.map((memory) => (
              <div
                key={memory.id}
                className="aspect-square relative group cursor-pointer"
                onClick={() => setSelectedMemory(memory)}
              >
                <img
                  src={`/drops/drop9/${memory.id}.png`}
                  alt={memory.title}
                  className="w-full h-full object-cover rounded-lg hover:opacity-75 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  #{memory.id} - {memory.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedMemory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <div className="space-y-4">
                <img
                  src={`/drops/drop9/${selectedMemory.id}.png`}
                  alt={selectedMemory.title}
                  className="w-full h-64 object-contain"
                />
                <h2 className="text-2xl font-bold font-mono">
                  {selectedMemory.title}
                </h2>
                <p className="text-gray-600">{selectedMemory.content}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
