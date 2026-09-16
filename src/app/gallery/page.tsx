import Image from 'next/image';

// Placeholder gallery images
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop", alt: "Coffee preparation" },
  { src: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2070&auto=format&fit=crop", alt: "Cheesecake" },
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop", alt: "Cafe interior" },
  { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop", alt: "Dessert assortment" },
  { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop", alt: "Latte art" },
  { src: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1990&auto=format&fit=crop", alt: "Pasta dish" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">Gallery</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            A glimpse into the Cocoa Cafe experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://instagram.com/cocoacafe.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-800 transition-colors"
          >
            See more on Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
