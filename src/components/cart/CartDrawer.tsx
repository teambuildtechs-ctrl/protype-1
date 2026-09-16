"use client";

import { useEffect, useState } from 'react';
import { useCartStore } from '@/lib/store/useCartStore';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, getTotal } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch for persisted store
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!isOpen) return null;

  const total = getTotal();
  const tax = total * 0.05; // 5% GST example
  const grandTotal = total + tax;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-[110] w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-6 border-b border-stone-100">
          <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            Your Order
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-stone-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-500 space-y-4">
              <ShoppingBag className="w-16 h-16 text-stone-200" />
              <p className="text-lg">Your cart is empty</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors mt-4"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium text-stone-900">{item.name}</h3>
                      <p className="font-bold text-stone-900">₹{item.price * item.quantity}</p>
                    </div>
                    {item.is_veg !== undefined && (
                      <span className="inline-flex items-center justify-center w-3 h-3 border border-green-500 rounded-sm mb-2">
                         <span className={`w-1.5 h-1.5 rounded-full ${item.is_veg ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      </span>
                    )}
                    
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-stone-200 rounded-full bg-stone-50">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-stone-200 rounded-l-full transition-colors text-stone-600"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-stone-200 rounded-r-full transition-colors text-stone-600"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-red-500 hover:text-red-700 font-medium underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-stone-100 p-6 bg-stone-50">
            <div className="space-y-2 mb-4 text-sm text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-stone-900 pt-2 border-t border-stone-200 mt-2">
                <span>Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <Link 
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center py-4 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
