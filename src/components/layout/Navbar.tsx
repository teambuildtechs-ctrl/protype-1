import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold text-stone-900 tracking-tight">COCOA CAFE</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <Link href="/menu" className="hover:text-stone-900 transition-colors">Menu</Link>
          <Link href="/about" className="hover:text-stone-900 transition-colors">About</Link>
          <Link href="/gallery" className="hover:text-stone-900 transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-stone-900 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/menu" 
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors"
          >
            Order Online
          </Link>
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
}
