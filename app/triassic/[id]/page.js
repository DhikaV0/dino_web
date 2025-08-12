"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DinoDetail() {
  const { id } = useParams(); // ambil ID dari URL
  const [dino, setDino] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dhikav0.github.io/dino-API/triassic/triassic_dino.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.triassic_dinosaurs.find(
          (item) => item.id.toString() === id
        );
        setDino(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dino:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-lg text-gray-600">Loading...</p>
    );
  }

  if (!dino) {
    return (
      <p className="text-center mt-10 text-lg text-red-600">
        Dinosaur not found 🦖
      </p>
    );
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-emerald-700 mb-6 text-center">
        {dino.name}
      </h1>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={dino.image}
          alt={dino.name}
          className="w-full h-96 object-contain bg-gray-100"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder.jpg";
          }}
        />

        <div className="p-6">
          <p className="text-gray-700 mb-4">{dino.description}</p>

          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>📏 Size:</strong> {dino.size}
            </li>
            <li>
              <strong>⚖️ Weight:</strong> {dino.weight}
            </li>
            <li>
              <strong>🥩 Diet:</strong> {dino.diet}
            </li>
            <li>
              <strong>📍 Location:</strong> {dino.location}
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
