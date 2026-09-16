import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold text-white">COCOA CAFE</h3>
          <p className="text-sm leading-relaxed text-stone-400">
            Crafted for every craving. Coffee, desserts, food, and experiences in the heart of Virar.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4">Visit Us</h4>
          <address className="not-italic text-sm space-y-2 text-stone-400">
            <p>Shop No. B-1, The Malange</p>
            <p>Near Madhuram Hotel Jakat Naka</p>
            <p>Gokul Township, Virar West</p>
            <p>Maharashtra 401303</p>
          </address>
        </div>
        
        <div>
          <h4 className="font-bold text-white mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://instagram.com/cocoacafe.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram @cocoacafe.in
              </a>
            </li>
            <li>
              <a href="tel:+918007890850" className="hover:text-white transition-colors">
                +91 80078 90850
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-stone-800 text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Cocoa Cafe. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
