import { useState } from "react";
import { memories, Memory } from "../data/memories";

export default function ProductPage() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  // Generate array of numbers from 1 to 108 for the grid
  const imageNumbers = Array.from({ length: 108 }, (_, i) => i + 1);

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

        {/* Grid Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 mt-4">
            {memories.map((memory) => (
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
