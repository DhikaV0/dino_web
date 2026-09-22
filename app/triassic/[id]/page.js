"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function DinoDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [dino, setDino] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dhikav0.github.io/dino-API/api/triassic.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch dinosaur data");
        return res.json();
      })
      .then((data) => {
        const found = data.triassic_dinosaurs.find(
          (item) => item.id.toString() === id
        );
        if (!found) throw new Error("Dinosaur not found");
        setDino(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dino:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-200">
        <div className="text-center">
          <div className="inline-block animate-pulse opacity-50">
            <span className="text-4xl grayscale">🦴</span>
          </div>
          <h2 className="text-lg font-medium text-white mt-4">Loading Data...</h2>
          <p className="text-slate-400 text-sm mt-1">Brushing off prehistoric dust</p>
        </div>
      </div>
    );
  }

  if (error || !dino) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-200 p-6">
        <div className="text-center max-w-md">
          <span className="text-6xl mb-4 block grayscale opacity-30">🦖</span>
          <h2 className="text-xl font-bold text-white mb-2">Record Not Found</h2>
          <p className="text-slate-400 mb-6 text-sm">
            {error || "We couldn't find this dinosaur in our fossil records."}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.back()}
              className="px-5 py-2 bg-slate-800 border border-slate-700 text-white rounded-lg hover:bg-slate-700 transition text-sm font-medium"
            >
              Go Back
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-5 py-2 bg-teal-600/20 border border-teal-500/50 text-teal-400 rounded-lg hover:bg-teal-600/30 transition text-sm font-medium"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-slate-400 hover:text-teal-400 font-medium text-sm transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Triassic
          </button>
          <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-slate-900 border border-slate-800 text-teal-400 uppercase tracking-widest">
            {dino.diet}
          </span>
        </div>

        {/* Main content */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          {/* Hero image */}
          <div className="relative h-64 sm:h-96 w-full bg-slate-950/50 border-b border-slate-800">
            <Image
              src={dino.image || "/placeholder-dino.jpg"}
              alt={dino.name}
              width={800}
              height={600}
              className="w-full h-full object-contain opacity-90"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-dino.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            <h1 className="absolute bottom-6 left-6 right-6 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              {dino.name}
            </h1>
          </div>

          {/* Content sections */}
          <div className="p-6 sm:p-10">
            <section className="mb-10">
              <h2 className="text-xl font-bold text-white mb-3 border-b border-slate-800 pb-2">
                Overview
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{dino.description}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <section>
                <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">
                  Physical Characteristics
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Size</span>
                    <span className="text-slate-200 font-medium">{dino.size}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Weight</span>
                    <span className="text-slate-200 font-medium">{dino.weight}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Diet Type</span>
                    <span className="text-slate-200 font-medium capitalize">{dino.diet}</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">
                  Discovery
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Location</span>
                    <span className="text-slate-200 font-medium text-right">{dino.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Era</span>
                    <span className="text-teal-400 font-medium">Triassic</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Year Found</span>
                    <span className="text-slate-200 font-medium">{dino.first_found}</span>
                  </div>
                </div>
              </section>
            </div>

            {/* Additional facts section */}
            {dino.facts && (
              <section className="mb-10 bg-slate-950/50 rounded-lg p-5 border border-slate-800/50">
                <h2 className="text-lg font-bold text-white mb-3 flex items-center">
                  <span className="text-teal-500 mr-2 text-xl">•</span> Interesting Facts
                </h2>
                <ul className="space-y-2 text-sm text-slate-400">
                  {dino.facts.split(";").map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-slate-600 mr-2">-</span>
                      <span>{fact.trim()}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Footer nav */}
            <div className="mt-8 pt-6 border-t border-slate-800 text-center md:text-left">
              <Link
                href="/triassic"
                className="inline-flex items-center text-sm text-teal-400 hover:text-teal-300 font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Explore other Triassic dinosaurs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}