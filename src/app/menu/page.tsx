"use client";

import { useState } from 'react';
import { mockCategories, mockProducts } from '@/lib/data/mockMenu';
import { useCartStore } from '@/lib/store/useCartStore';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const addItem = useCartStore((state) => state.addItem);

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category_id === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900">Our Menu</h1>
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search for coffee, dessert..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 bg-white"
            />
            <svg className="w-5 h-5 absolute left-4 top-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Categories Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24 bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-stone-900 mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveCategory('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeCategory === 'all' ? 'bg-stone-900 text-white font-medium' : 'text-stone-600 hover:bg-stone-100'}`}
                  >
                    All Items
                  </button>
                </li>
                {mockCategories.map(category => (
                  <li key={category.id}>
                    <button 
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${activeCategory === category.id ? 'bg-stone-900 text-white font-medium' : 'text-stone-600 hover:bg-stone-100'}`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Menu Items Grid */}
          <main className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl font-bold text-stone-900">{product.name}</h3>
                        <div className="flex gap-2">
                          {product.is_veg !== undefined && (
                            <span className={`w-4 h-4 border rounded-sm flex items-center justify-center ${product.is_veg ? 'border-green-500' : 'border-red-500'}`} title={product.is_veg ? "Vegetarian" : "Non-Vegetarian"}>
                              <span className={`w-2 h-2 rounded-full ${product.is_veg ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-stone-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                      
                      <div className="flex gap-2 mb-4">
                        {product.is_bestseller && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-md">Bestseller</span>
                        )}
                        {product.is_new && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-md">New</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                      <span className="text-lg font-bold text-stone-900">₹{product.price}</span>
                      <button 
                        onClick={() => addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          is_veg: product.is_veg
                        })}
                        className="px-6 py-2 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-colors active:scale-95"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-stone-500">
                  <p className="text-lg">No items found matching your criteria.</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
