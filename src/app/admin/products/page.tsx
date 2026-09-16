"use client";

import { useState } from "react";
import { mockProducts, mockCategories } from "@/lib/data/mockMenu";
import { Plus, Edit2, Trash2, Check, X, Search } from "lucide-react";

export default function AdminProductsPage() {
  const [products, setProducts] = useState(mockProducts);
  const [search, setSearch] = useState("");
  const [editingProduct, setEditingProduct] = useState<any | null>(null);

  // Filter products by search
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAvailability = (id: string) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, is_bestseller: !item.is_bestseller } : item
      )
    );
  };

  const deleteProduct = (id: string) => {
    if (confirm("Are you sure you want to remove this product?")) {
      setProducts((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    if (editingProduct.id) {
      // Edit existing
      setProducts((prev) =>
        prev.map((item) => (item.id === editingProduct.id ? editingProduct : item))
      );
    } else {
      // Add new
      const newProduct = {
        ...editingProduct,
        id: "p" + (products.length + 1),
      };
      setProducts((prev) => [newProduct, ...prev]);
    }
    setEditingProduct(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-stone-900">Menu Products</h1>
          <p className="text-sm text-stone-500 mt-1">Manage items, prices, bestsellers, and stock</p>
        </div>

        <button
          onClick={() =>
            setEditingProduct({
              name: "",
              price: 150,
              description: "",
              category_id: mockCategories[0].id,
              is_veg: true,
              is_bestseller: false,
              is_new: true,
            })
          }
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 text-white rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <input
          type="text"
          placeholder="Filter menu items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-stone-900"
        />
        <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
      </div>

      {/* Table of Products */}
      <div className="bg-white rounded-3xl border border-stone-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 text-xs uppercase font-semibold">
              <tr>
                <th className="py-3.5 px-6">Item Name</th>
                <th className="py-3.5 px-6">Category</th>
                <th className="py-3.5 px-6">Price</th>
                <th className="py-3.5 px-6">Type</th>
                <th className="py-3.5 px-6">Bestseller</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-stone-700">
              {filtered.map((product) => {
                const category = mockCategories.find((c) => c.id === product.category_id);
                return (
                  <tr key={product.id} className="hover:bg-stone-50/50">
                    <td className="py-4 px-6 font-medium text-stone-900">
                      <div>{product.name}</div>
                      <div className="text-xs text-stone-400 truncate max-w-xs">{product.description}</div>
                    </td>
                    <td className="py-4 px-6">{category?.name || "Other"}</td>
                    <td className="py-4 px-6 font-semibold">₹{product.price}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
                          product.is_veg
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.is_veg ? "Veg" : "Non-Veg"}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => toggleAvailability(product.id)}
                        className={`px-2.5 py-1 text-xs rounded-full font-semibold transition-colors ${
                          product.is_bestseller
                            ? "bg-amber-100 text-amber-800"
                            : "bg-stone-100 text-stone-400 hover:text-stone-600"
                        }`}
                      >
                        {product.is_bestseller ? "Bestseller" : "Standard"}
                      </button>
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                      <button
                        onClick={() => setEditingProduct(product)}
                        className="p-1.5 hover:bg-stone-100 text-stone-600 hover:text-stone-900 rounded-lg"
                        title="Edit Item"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="p-1.5 hover:bg-red-50 text-stone-400 hover:text-red-600 rounded-lg"
                        title="Delete Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit / Add Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">
              {editingProduct.id ? "Edit Product" : "Add New Product"}
            </h2>

            <form onSubmit={handleSave} className="space-y-4 text-sm">
              <div className="space-y-1.5">
                <label className="font-medium text-stone-700">Product Name</label>
                <input
                  type="text"
                  required
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 border rounded-xl border-stone-200 focus:ring-2 focus:ring-stone-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-medium text-stone-700">Price (₹)</label>
                  <input
                    type="number"
                    required
                    value={editingProduct.price}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, price: Number(e.target.value) })
                    }
                    className="w-full px-3.5 py-2.5 border rounded-xl border-stone-200 focus:ring-2 focus:ring-stone-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-medium text-stone-700">Category</label>
                  <select
                    value={editingProduct.category_id}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, category_id: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 border rounded-xl border-stone-200 focus:ring-2 focus:ring-stone-900"
                  >
                    {mockCategories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-medium text-stone-700">Description</label>
                <textarea
                  rows={2}
                  value={editingProduct.description}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, description: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 border rounded-xl border-stone-200 focus:ring-2 focus:ring-stone-900"
                ></textarea>
              </div>

              <div className="flex gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingProduct.is_veg}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, is_veg: e.target.checked })
                    }
                    className="rounded text-stone-900"
                  />
                  <span>Vegetarian</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingProduct.is_bestseller}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, is_bestseller: e.target.checked })
                    }
                    className="rounded text-stone-900"
                  />
                  <span>Bestseller</span>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-stone-900 text-white font-medium hover:bg-stone-800"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
