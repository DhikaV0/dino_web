"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function DinoDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [dino, setDino] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dhikav0.github.io/dino-API/jurassic/jurassic_dino.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch dinosaur data");
        return res.json();
      })
      .then((data) => {
        const found = data.jurassic_dinosaurs.find(
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-100 to-amber-50">
        <div className="text-center">
          <div className="inline-block animate-pulse">
            <span className="text-6xl">🦴</span>
          </div>
          <h2 className="text-2xl font-bold text-emerald-800 mt-4">
            Unearthing {id}...
          </h2>
          <p className="text-gray-600 mt-2">Brushing off prehistoric dust</p>
        </div>
      </div>
    );
  }

  if (error || !dino) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-stone-100 to-amber-50 p-6">
        <div className="text-center max-w-md">
          <span className="text-6xl mb-4">🦖</span>
          <h2 className="text-2xl font-bold text-red-700 mb-2">Rawr! Error</h2>
          <p className="text-gray-700 mb-6">
            {error || "We couldn't find this dinosaur in our fossil records."}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.back()}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Go Back
            </button>
            <button
              onClick={() => router.push("/")}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-amber-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-emerald-700 hover:text-emerald-900 font-medium"
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
            Back to Jurassic
          </button>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
            {dino.diet}
          </span>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Hero image */}
          <div className="relative h-80 sm:h-96 w-full bg-gray-100">
            <img
              src={dino.image || "/placeholder-dino.jpg"}
              alt={dino.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-dino.jpg";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
            <h1 className="absolute bottom-4 left-4 right-4 text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg">
              {dino.name}
            </h1>
          </div>

          {/* Content sections */}
          <div className="p-6 sm:p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center">
                <span className="mr-2">📜</span> Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">{dino.description}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center">
                  <span className="mr-2">📏</span> Physical Characteristics
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Size</span>
                    <span className="font-medium">{dino.size}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-medium">{dino.weight}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Diet Type</span>
                    <span className="font-medium capitalize">{dino.diet}</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center">
                  <span className="mr-2">🌎</span> Discovery
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Location Found</span>
                    <span className="font-medium text-right">{dino.location}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Time Period</span>
                    <span className="font-medium">Jurassic</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Year Discovered</span>
                    <span className="font-medium">
                      {dino.discovery_year || "Unknown"}
                    </span>
                  </div>
                </div>
              </section>
            </div>

            {/* Additional facts section */}
            {dino.facts && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center">
                  <span className="mr-2">🔍</span> Interesting Facts
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-gray-700">
                  {dino.facts.split(";").map((fact, index) => (
                    <li key={index} className="pl-2">
                      {fact.trim()}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Footer with era info */}
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
              <h3 className="font-bold text-emerald-900 mb-2">
                About the Jurassic Period
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Jurassic Period, second of three periods of the Mesozoic Era. 
                Extending from 201.3 million to 145 million years ago, 
                it immediately followed the Triassic Period and was succeeded by the Cretaceous Period.
              </p>
              <Link
                href="/jurassic"
                className="text-sm text-emerald-700 hover:text-emerald-900 font-medium flex items-center"
              >
                Explore more Jurassic dinosaurs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}