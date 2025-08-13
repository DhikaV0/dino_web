import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#3c3744] to-[#6b4423]">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-700 animate-pulse">
          Dino Era Explorer
        </h1>
        
        {/* Subtitle with better spacing */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Journey through time and discover the magnificent creatures that ruled the Earth millions of years ago
        </p>
        
        {/* Era buttons with icons and hover effects */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
          <Link 
            href="/triassic" 
            className="relative overflow-hidden px-8 py-5 bg-emerald-700 text-white rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-200 hover:-translate-y-1 group"
          >
            <div className="absolute -bottom-4 -right-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">🦖</div>
            <span className="text-2xl font-bold relative z-10">Triassic</span>
            <p className="text-sm opacity-80 mt-1 relative z-10">252-201 million years ago</p>
          </Link>
          
          <Link 
            href="/jurassic" 
            className="relative overflow-hidden px-8 py-5 bg-sky-700 text-white rounded-xl hover:bg-sky-600 transition-all duration-300 shadow-lg hover:shadow-sky-200 hover:-translate-y-1 group"
          >
            <div className="absolute -bottom-4 -right-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">🦕</div>
            <span className="text-2xl font-bold relative z-10">Jurassic</span>
            <p className="text-sm opacity-80 mt-1 relative z-10">201-145 million years ago</p>
          </Link>
          
          <Link 
            href="/cretaceous" 
            className="relative overflow-hidden px-8 py-5 bg-rose-700 text-white rounded-xl hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-rose-200 hover:-translate-y-1 group"
          >
            <div className="absolute -bottom-4 -right-4 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">🐊</div>
            <span className="text-2xl font-bold relative z-10">Cretaceous</span>
            <p className="text-sm opacity-80 mt-1 relative z-10">145-66 million years ago</p>
          </Link>
        </div>
      </div>
    </main>
  );
}