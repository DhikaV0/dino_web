import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#3c3744] to-[#6b4423] flex flex-col justify-between">
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-emerald-700 animate-pulse">
          Dino Era Explorer
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Journey through time and discover the magnificent creatures that ruled the Earth millions of years ago
        </p>

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

        {/* Additional content section */}
        <div className="max-w-5xl mx-auto mt-24 mb-16">
          <div className="bg-[#2b262f]/60 backdrop-blur-sm rounded-xl p-8 border border-[#4a4453]">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">About This Project</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-3 flex items-center">
                  Our Mission
                </h3>
                <p className="text-gray-300">
                  Dino Era Explorer aims to make paleontology accessible to everyone. We combine scientific accuracy with engaging presentation to bring prehistoric creatures to life through carefully curated information and interactive exploration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sky-400 mb-3 flex items-center">
                  Scientific Accuracy
                </h3>
                <p className="text-gray-300">
                  Our data is meticulously verified against the latest paleontological research. We regularly update our database to reflect new discoveries and scientific consensus about these fascinating prehistoric creatures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-[#2b262f]/80 backdrop-blur-sm text-gray-300 py-8 border-t border-[#4a4453]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-4">Dino Era Explorer</h3>
              <p className="text-sm text-gray-400">
                Your portal to the Mesozoic era, exploring the incredible diversity of dinosaurs across the Triassic, Jurassic, and Cretaceous periods.
              </p>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><Link href="/triassic" className="hover:text-amber-400 transition">Triassic Period</Link></li>
                <li><Link href="/jurassic" className="hover:text-amber-400 transition">Jurassic Period</Link></li>
                <li><Link href="/cretaceous" className="hover:text-amber-400 transition">Cretaceous Period</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://paleobiodb.org" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Paleobiology Database</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Dinosaur" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Wikipedia: Dinosaurs</a></li>
                <li><a href="https://www.nhm.ac.uk/discover/dino-directory.html" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Natural History Museum</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://twitter.com/AndhikaJud31563" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                  <img src="/twitter.svg" alt="Twitter" className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/dhik_dihk" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                  <img src="/instagram.svg" alt="Instagram" className="h-5 w-5" />
                </a>
                <a href="https://github.com/DhikaV0" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                  <img src="/github.svg" alt="GitHub" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#4a4453] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <span>Data updated: {new Date().toLocaleDateString()}</span>
            </div>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Dino Era Explorer — Created by <span className="text-amber-400 font-semibold">Andhika</span> | 
              Data source: Adapted from Wikipedia & PaleoDB | 
              Images may not reflect the most current scientific understanding
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}