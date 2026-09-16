"use client";

import { useCartStore } from '@/lib/store/useCartStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    deliveryType: 'pickup',
    address: '',
    instructions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-stone-50 py-24 flex flex-col items-center justify-center">
        <h1 className="font-serif text-3xl font-bold text-stone-900 mb-4">Your cart is empty</h1>
        <p className="text-stone-600 mb-8">Add some delicious items from our menu before checking out.</p>
        <button 
          onClick={() => router.push('/menu')}
          className="px-8 py-4 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-800 transition-colors"
        >
          Return to Menu
        </button>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-stone-50 py-24 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h1 className="font-serif text-4xl font-bold text-stone-900 mb-4 text-center">Order Confirmed!</h1>
        <p className="text-stone-600 mb-8 text-center max-w-md">
          Thank you for your order, {formData.name}. We've received it and will start preparing it shortly.
        </p>
        <button 
          onClick={() => router.push('/')}
          className="px-8 py-4 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-800 transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  const total = getTotal();
  const tax = total * 0.05;
  const deliveryFee = formData.deliveryType === 'delivery' ? 50 : 0;
  const grandTotal = total + tax + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to place order
    setTimeout(() => {
      clearCart();
      setOrderPlaced(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="font-serif text-4xl font-bold text-stone-900 mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="flex-1 space-y-8">
            <form id="checkout-form" onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-8">
              
              {/* Contact Info */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-stone-700">Full Name</label>
                    <input required type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-stone-700">Phone Number</label>
                    <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="email" className="text-sm font-medium text-stone-700">Email Address (Optional)</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900" />
                  </div>
                </div>
              </section>

              <hr className="border-stone-100" />

              {/* Delivery Info */}
              <section>
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">Order Method</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <label className={`cursor-pointer flex items-center justify-center p-4 rounded-xl border-2 transition-colors ${formData.deliveryType === 'pickup' ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-300'}`}>
                    <input type="radio" name="deliveryType" value="pickup" checked={formData.deliveryType === 'pickup'} onChange={handleInputChange} className="sr-only" />
                    <span className={`font-medium ${formData.deliveryType === 'pickup' ? 'text-stone-900' : 'text-stone-600'}`}>Store Pickup</span>
                  </label>
                  <label className={`cursor-pointer flex items-center justify-center p-4 rounded-xl border-2 transition-colors ${formData.deliveryType === 'delivery' ? 'border-stone-900 bg-stone-50' : 'border-stone-200 hover:border-stone-300'}`}>
                    <input type="radio" name="deliveryType" value="delivery" checked={formData.deliveryType === 'delivery'} onChange={handleInputChange} className="sr-only" />
                    <span className={`font-medium ${formData.deliveryType === 'delivery' ? 'text-stone-900' : 'text-stone-600'}`}>Delivery</span>
                  </label>
                </div>

                {formData.deliveryType === 'delivery' && (
                  <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-medium text-stone-700">Delivery Address</label>
                      <textarea required id="address" name="address" rows={3} value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900"></textarea>
                    </div>
                  </div>
                )}

                <div className="space-y-2 mt-4">
                  <label htmlFor="instructions" className="text-sm font-medium text-stone-700">Special Instructions (Optional)</label>
                  <input type="text" id="instructions" name="instructions" value={formData.instructions} onChange={handleInputChange} placeholder="e.g. Less sugar, extra napkins..." className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900" />
                </div>
              </section>

            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:w-96 shrink-0">
            <div className="sticky top-24 bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <div>
                      <p className="font-medium text-stone-900">{item.name}</p>
                      <p className="text-stone-500">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-medium text-stone-900">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-100 pt-4 space-y-3 text-sm text-stone-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (5%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                {formData.deliveryType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-stone-900 pt-3 border-t border-stone-200 mt-2">
                  <span>Total</span>
                  <span>₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                form="checkout-form"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Processing...
                  </>
                ) : (
                  `Place Order - ₹${grandTotal.toFixed(2)}`
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
