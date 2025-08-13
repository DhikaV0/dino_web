"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TriassicPage() {
  const [dinos, setDinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://dhikav0.github.io/dino-API/triassic/triassic_dino.json")
      .then((res) => res.json())
      .then((data) => {
        setDinos(data.triassic_dinosaurs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-stone-100 to-amber-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-700 mb-4"></div>
          <h2 className="text-2xl font-bold text-emerald-800 mb-2">Unearthing Dinosaurs...</h2>
          <p className="text-gray-600">Digging up prehistoric data from the Triassic period</p>
        </div>
      </div>
    );
  }

  if (dinos.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-stone-100 to-amber-50 p-6">
        <div className="text-center max-w-md">
          <span className="text-6xl mb-4">🦖</span>
          <h2 className="text-2xl font-bold text-red-700 mb-2">No Dinosaurs Found</h2>
          <p className="text-gray-700 mb-6">
            Our paleontologists couldn't find any Triassic dinosaurs. Try again later or explore other eras.
          </p>
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with era info */}
        <div className="relative mb-12">
          {/* Tombol Back di pojok kiri atas */}
          <button
            onClick={() => router.push("/")}
            className="absolute left-0 top-0 flex items-center text-emerald-700 hover:text-emerald-900 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </button>

          {/* Header tetap center */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-emerald-100 text-emerald-800 rounded-full px-6 py-2 mb-4">
              <span className="text-xl mr-2">🌍</span>
              <span className="font-medium">252-201 Million Years Ago</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-3">
              Triassic Dinosaurs
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the ancient creatures that roamed Earth during the dawn of the dinosaurs
            </p>
          </div>
        </div>

        {/* Search and filter (placeholder for future functionality) */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Triassic dinosaurs..."
              className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              disabled
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Search functionality coming soon!
          </p>
        </div>

        {/* Dinosaur grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dinos.map((dino) => (
            <Link
              key={dino.id}
              href={`/triassic/${dino.id}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image with fallback */}
              <div className="w-full h-56 overflow-hidden relative">
                <Image
                  src={dino.image || "/placeholder-dino.jpg"}
                  alt={dino.name}
                  width={400}
                  height={224}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-dino.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {dino.name}
                  </h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    {dino.diet}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {dino.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <span className="mr-1">📏</span>
                    {dino.size}
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-1">⚖️</span>
                    {dino.weight}
                  </div>
                  <div className="flex items-center text-gray-700 col-span-2">
                    <span className="mr-1">📍</span>
                    <span className="truncate">{dino.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Era information footer */}
        <div className="mt-16 bg-emerald-50 rounded-xl p-6 border border-emerald-100">
          <h3 className="text-xl font-bold text-emerald-900 mb-3">About the Triassic Period</h3>
          <p className="text-gray-700 mb-4">
            The Triassic period marked the beginning of the Mesozoic Era, following the Permian extinction. 
            It saw the emergence of the first dinosaurs, which were generally small compared to later periods.
          </p>
          <button 
            onClick={() => window.open("https://en.wikipedia.org/wiki/Triassic", "_blank")}
            className="text-emerald-700 hover:text-emerald-900 font-medium flex items-center"
          >
            Learn more about the Triassic
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}