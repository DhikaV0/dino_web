export default function Home() {
  return (
    <main className="text-center mt-10">
      <h1 className="text-5xl font-bold mb-4">Dino Era Explorer</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore amazing dinosaurs from different prehistoric eras.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <a href="/triassic" className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition">
          Triassic
        </a>
        <a href="/jurassic" className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition">
          Jurassic
        </a>
        <a href="/cretaceous" className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-500 transition">
          Cretaceous
        </a>
      </div>
    </main>
  );
}
