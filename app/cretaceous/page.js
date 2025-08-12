"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CretaceousPage() {
  const [dinos, setDinos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dhikav0.github.io/dino-API/cretaceous/cretaceous_dino.json")
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
      <p className="text-center mt-10 text-lg text-gray-600">
        Loading dinosaurs...
      </p>
    );
  }

  if (dinos.length === 0) {
    return (
      <p className="text-center mt-10 text-lg text-red-600">
        No dinosaur data available 🦖
      </p>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold text-emerald-700 mb-8 text-center">
        🦕 Cretaceous Dinosaurs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dinos.map((dino) => (
          <Link 
            key={dino.id} 
            href={`/cretaceous/${dino.id}`} 
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition block"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={dino.image}
                alt={dino.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.jpg";
                }}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{dino.name}</h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {dino.description}
              </p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  <strong>📏 Size:</strong> {dino.size}
                </p>
                <p>
                  <strong>⚖️ Weight:</strong> {dino.weight}
                </p>
                <p>
                  <strong>🥩 Diet:</strong> {dino.diet}
                </p>
                <p>
                  <strong>📍 Location:</strong> {dino.location}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
