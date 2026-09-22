import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 flex flex-col justify-between selection:bg-teal-500/30">
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
          Dino Era <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Explorer</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Journey through time and discover the magnificent creatures that ruled the Earth millions of years ago.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <Link
            href="/triassic"
            className="relative overflow-hidden px-8 py-6 bg-slate-900 border border-slate-800 text-left rounded-xl hover:bg-slate-800 hover:border-teal-500/50 transition-all duration-300 group"
          >
            <div className="absolute -bottom-4 -right-4 text-7xl opacity-5 group-hover:opacity-10 transition-opacity grayscale group-hover:grayscale-0">🦖</div>
            <span className="text-2xl font-bold text-white relative z-10 block mb-1 group-hover:text-teal-400 transition-colors">Triassic</span>
            <p className="text-sm text-slate-500 relative z-10">252-201 million years ago</p>
          </Link>

          <Link
            href="/jurassic"
            className="relative overflow-hidden px-8 py-6 bg-slate-900 border border-slate-800 text-left rounded-xl hover:bg-slate-800 hover:border-teal-500/50 transition-all duration-300 group"
          >
            <div className="absolute -bottom-4 -right-4 text-7xl opacity-5 group-hover:opacity-10 transition-opacity grayscale group-hover:grayscale-0">🦕</div>
            <span className="text-2xl font-bold text-white relative z-10 block mb-1 group-hover:text-teal-400 transition-colors">Jurassic</span>
            <p className="text-sm text-slate-500 relative z-10">201-145 million years ago</p>
          </Link>

          <Link
            href="/cretaceous"
            className="relative overflow-hidden px-8 py-6 bg-slate-900 border border-slate-800 text-left rounded-xl hover:bg-slate-800 hover:border-teal-500/50 transition-all duration-300 group"
          >
            <div className="absolute -bottom-4 -right-4 text-7xl opacity-5 group-hover:opacity-10 transition-opacity grayscale group-hover:grayscale-0">🐊</div>
            <span className="text-2xl font-bold text-white relative z-10 block mb-1 group-hover:text-teal-400 transition-colors">Cretaceous</span>
            <p className="text-sm text-slate-500 relative z-10">145-66 million years ago</p>
          </Link>
        </div>

        {/* Additional content section */}
        <div className="max-w-5xl mx-auto mt-24 mb-16">
          <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800 text-left">
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4">About This Project</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-teal-400 mb-2">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  Dino Era Explorer aims to make paleontology accessible to everyone. We combine scientific accuracy with engaging presentation to bring prehistoric creatures to life through carefully curated information and interactive exploration.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-400 mb-2">Scientific Accuracy</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                  Our data is meticulously verified against the latest paleontological research. We regularly update our database to reflect new discoveries and scientific consensus about these fascinating prehistoric creatures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Dino Era Explorer</h3>
              <p className="text-sm">
                Your portal to the Mesozoic era, exploring the incredible diversity of dinosaurs across the Triassic, Jurassic, and Cretaceous periods.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/triassic" className="hover:text-teal-400 transition">Triassic Period</Link></li>
                <li><Link href="/jurassic" className="hover:text-teal-400 transition">Jurassic Period</Link></li>
                <li><Link href="/cretaceous" className="hover:text-teal-400 transition">Cretaceous Period</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://paleobiodb.org" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">Paleobiology Database</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Dinosaur" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">Wikipedia: Dinosaurs</a></li>
                <li><a href="https://www.nhm.ac.uk/discover/dino-directory.html" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">Natural History Museum</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://twitter.com/AndhikaJud31563" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-teal-400 transition">
                  <img src="/twitter.svg" alt="Twitter" className="h-5 w-5 invert opacity-70" />
                </a>
                <a href="https://instagram.com/dhik_dihk" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-teal-400 transition">
                  <img src="/instagram.svg" alt="Instagram" className="h-5 w-5 invert opacity-70" />
                </a>
                <a href="https://github.com/DhikaV0" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-teal-400 transition">
                  <img src="/github.svg" alt="GitHub" className="h-5 w-5 invert opacity-70" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div>
              <span>Data updated: {new Date().toLocaleDateString()}</span>
            </div>
            <p>
              © {new Date().getFullYear()} Dino Era Explorer — Created by <span className="text-teal-400 font-medium">Andhika</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}