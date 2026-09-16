import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">Our Story</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Welcome to Cocoa Cafe, where passion for exceptional coffee meets the art of fine baking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop"
              alt="Cocoa Cafe Interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-stone-900">Crafting the Perfect Experience</h2>
            <p className="text-stone-600 leading-relaxed">
              Located in the heart of Virar West, Cocoa Cafe was born from a simple desire: to create a space where people can connect over premium coffee and artisanal food. Our journey began with a focus on quality ingredients and masterful preparation.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Whether you are here for a morning Americano, a casual business lunch, or our signature Pistachio Basque Cheesecake, we ensure every detail is crafted to perfection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-stone-900 text-white rounded-3xl p-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Premium Coffee</h3>
            <p className="text-stone-300">Sourced from the finest estates, manually brewed to perfection.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Artisanal Bakery</h3>
            <p className="text-stone-300">Freshly baked daily, from croissants to our signature Basque cheesecakes.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Warm Ambience</h3>
            <p className="text-stone-300">A space designed for connection, creativity, and comfort.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
