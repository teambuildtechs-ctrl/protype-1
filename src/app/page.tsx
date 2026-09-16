import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-stone-900 text-white overflow-hidden">
        {/* We would use an actual image here, but for now we'll use a placeholder or solid color */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
            COCOA CAFE
          </h1>
          <p className="text-xl md:text-2xl font-light text-stone-200 uppercase tracking-widest">
            Coffee • Desserts • Food • Experiences
          </p>
          <p className="text-lg md:text-xl text-stone-300 italic max-w-2xl mx-auto">
            Crafted for every craving.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link 
              href="/menu" 
              className="px-8 py-4 bg-white text-stone-900 font-medium rounded-full hover:bg-stone-200 transition-colors w-full sm:w-auto"
            >
              Order Online
            </Link>
            <Link 
              href="/menu" 
              className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              View Menu
            </Link>
            <Link 
              href="#reservations" 
              className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Our Offerings</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            From artisanal coffees to decadent desserts and savory delights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Category Cards */}
          <div className="group relative h-96 overflow-hidden rounded-2xl bg-stone-200 cursor-pointer">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
               <h3 className="font-serif text-3xl font-bold mb-2">Coffee</h3>
               <span className="text-sm uppercase tracking-wider border-b border-white/50 pb-1">Explore</span>
             </div>
          </div>
          <div className="group relative h-96 overflow-hidden rounded-2xl bg-stone-200 cursor-pointer">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
               <h3 className="font-serif text-3xl font-bold mb-2">Desserts</h3>
               <span className="text-sm uppercase tracking-wider border-b border-white/50 pb-1">Explore</span>
             </div>
          </div>
          <div className="group relative h-96 overflow-hidden rounded-2xl bg-stone-200 cursor-pointer">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1990&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
               <h3 className="font-serif text-3xl font-bold mb-2">Food</h3>
               <span className="text-sm uppercase tracking-wider border-b border-white/50 pb-1">Explore</span>
             </div>
          </div>
        </div>
      </section>

      {/* Instagram Banner */}
      <section className="bg-stone-900 text-white py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Follow the Cocoa Experience</h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Join our community and stay updated with our latest creations and events.
          </p>
          <a 
            href="https://instagram.com/cocoacafe.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-medium rounded-full hover:bg-stone-200 transition-colors"
          >
            Follow @cocoacafe.in
          </a>
        </div>
      </section>
    </div>
  );
}
