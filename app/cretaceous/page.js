"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CretaceousPage() {
  const [dinos, setDinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://dhikav0.github.io/dino-API/api/cretaceous.json")
      .then((res) => res.json())
      .then((data) => {
        setDinos(data.cretaceous_dinosaurs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-200">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal-500 mb-4"></div>
          <h2 className="text-xl font-medium text-white mb-2">Unearthing Dinosaurs...</h2>
          <p className="text-slate-400 text-sm">Digging up prehistoric data from the Cretaceous period</p>
        </div>
      </div>
    );
  }

  if (dinos.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-200 p-6">
        <div className="text-center max-w-md">
          <span className="text-6xl mb-4 block grayscale opacity-50">🦖</span>
          <h2 className="text-xl font-bold text-white mb-2">No Dinosaurs Found</h2>
          <p className="text-slate-400 mb-6 text-sm">
            Our paleontologists couldn&apos;t find any Cretaceous dinosaurs. Try again later or explore other eras.
          </p>
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg hover:bg-slate-700 hover:border-teal-500 transition-all text-sm font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 sm:px-6 lg:px-8 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header with era info */}
        <div className="relative mb-12">
          <button
            onClick={() => router.push("/")}
            className="left-0 top-0 flex items-center py-6 text-slate-400 hover:text-teal-400 transition-colors font-medium text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-teal-950/50 border border-teal-900/50 text-teal-400 rounded-full px-4 py-1.5 mb-4 text-sm font-medium">
              <span className="mr-2">🌍</span>
              145-66 Million Years Ago
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
              Cretaceous Dinosaurs
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Discover the ancient creatures that roamed Earth during the dawn of the dinosaurs.
            </p>
          </div>
        </div>

        {/* Search and filter (placeholder) */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Cretaceous dinosaurs..."
              className="w-full px-5 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-all text-sm"
              disabled
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500">
              🔍
            </button>
          </div>
        </div>

        {/* Dinosaur grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dinos.map((dino) => (
            <Link
              key={dino.id}
              href={`/cretaceous/${dino.id}`}
              className="group bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="w-full h-48 overflow-hidden relative bg-slate-800">
                <Image
                  src={dino.image || "/placeholder-dino.jpg"}
                  alt={dino.name}
                  width={400}
                  height={224}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-dino.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                    {dino.name}
                  </h2>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 border border-slate-700 text-teal-400 uppercase tracking-wider">
                    {dino.diet}
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {dino.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs border-t border-slate-800 pt-3">
                  <div className="flex items-center text-slate-300">
                    <span className="mr-1.5 opacity-50">📏</span>
                    {dino.size}
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="mr-1.5 opacity-50">⚖️</span>
                    {dino.weight}
                  </div>
                  <div className="flex items-center text-slate-300 col-span-2">
                    <span className="mr-1.5 opacity-50">📍</span>
                    <span className="truncate">{dino.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Era information footer */}
        <div className="mt-16 bg-slate-900/50 rounded-xl p-6 border border-slate-800 text-center md:text-left">
          <h3 className="text-lg font-bold text-white mb-2">About the Cretaceous Period</h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed max-w-4xl">
            The Cretaceous is a geological period that lasted from about 143.1 to 66 million years ago. It is the third and final period of the Mesozoic Era, as well as the longest. At around 77.1 million years, it is the ninth and longest geological period of the entire Phanerozoic.
          </p>
          <button 
            onClick={() => window.open("https://en.wikipedia.org/wiki/Cretaceous", "_blank")}
            className="inline-flex items-center text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
          >
            Learn more on Wikipedia
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}