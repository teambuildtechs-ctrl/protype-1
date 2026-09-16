import Link from 'next/link';
import { ShoppingBag, User as UserIcon } from 'lucide-react';
import { useCartStore } from '@/lib/store/useCartStore';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { getItemCount, setIsOpen } = useCartStore();
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const itemCount = mounted ? getItemCount() : 0;

  return (
    <nav className="sticky top-0 z-50 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold text-stone-900 tracking-tight">COCOA CAFE</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <Link href="/menu" className="hover:text-stone-900 transition-colors">Menu</Link>
          <Link href="/reserve" className="hover:text-stone-900 transition-colors">Book a Table</Link>
          <Link href="/about" className="hover:text-stone-900 transition-colors">About</Link>
          <Link href="/gallery" className="hover:text-stone-900 transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-stone-900 transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link 
            href="/menu" 
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors"
          >
            Order Online
          </Link>

          <Link
            href={user ? "/profile" : "/login"}
            className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 rounded-full transition-colors"
            title={user ? "My Account" : "Sign In"}
            aria-label="User Account"
          >
            <UserIcon className="w-5 h-5" />
          </Link>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-stone-900 hover:bg-stone-200/60 rounded-full transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
