import { useState } from "react";
import ProductList from "./ProductList";
import { useInventory } from "../../context/InventoryContext";

export default function ProductCatalog() {
    const inventory = useInventory();
    const [searchQuery, setSearchQuery] = useState("")

    const filteredProducts = inventory.filter(
        (item) =>
            item.stock > 0 &&
            item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="relative w-full min-h-[calc(100vh-120px)]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/BG.png')" }}
            />

            <div className="relative z-10 flex flex-col items-center px-4 py-6">
                <div className="w-full max-w-3xl bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-purple-200/40 p-5">
                    <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent text-center mb-4">Product Catalog</h1>
                    <div className="w-full max-w-md mx-auto">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative w-full max-w-5xl mt-4">
                    {filteredProducts.length > 0 ? (
                        <ProductList products={filteredProducts} />
                    ) : (
                        <p className="m-2 text-slate-500 text-center">No products found.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
