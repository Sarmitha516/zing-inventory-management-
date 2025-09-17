import { useState } from "react";
import { useInventory } from "../../context/InventoryContext";
import Product from "./Product";

const Inventory = () => {
    const inventory = useInventory()
    const [alertValue, setAlertValue] = useState(10)
    const [searchQuery, setSearchQuery] = useState("")
    const [showOnlyDepleted, setShowOnlyDepleted] = useState(false)

    const lowerCaseSearchQuery = searchQuery.toLowerCase()
    const filteredInventory = inventory.filter((product) => {
        const matchesSearchQuery = product.productName.toLowerCase().includes(lowerCaseSearchQuery);
        const isDepleted = product.stock < alertValue;
        return showOnlyDepleted ? (matchesSearchQuery && isDepleted) : matchesSearchQuery;
    })


    return (
        <section className="relative w-full min-h-[calc(100vh-120px)]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/BG.png')" }}
            />
            <div className="relative z-10 pt-4 pb-6 flex flex-col items-center">
                <div className="w-full max-w-3xl bg-white/70 backdrop-blur rounded-xl shadow-lg border border-purple-200/40 p-4">
                <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent text-center mb-4">Inventory</h1>
                <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
                    <div className="w-full max-w-md">
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
                                placeholder="Search inventory..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value)
                                }}
                                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <label htmlFor="alert-value" className="text-slate-700">Alert Value</label>
                        <input
                            id="alert-value"
                            className="px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition w-24"
                            value={alertValue}
                            type="number"
                            onChange={(e) => setAlertValue(e.target.value)}
                        />
                        <label className="text-slate-700" htmlFor="show-only-depleted">Show Only Depleted</label>
                        <input
                            className="ml-1 w-5 h-5 accent-purple-600"
                            id="show-only-depleted" type="checkbox" checked={showOnlyDepleted} onChange={() => {
                                setShowOnlyDepleted(!showOnlyDepleted)
                            }}
                        />
                    </div>
                </div>
            </div>
                {filteredInventory.length > 0 ? (
                    <div className="w-full max-w-4xl mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredInventory.map((product) => (
                            <Product key={product.productName} product={product} alertValue={alertValue} />
                        ))}
                    </div>
                ) : (
                    <p className="m-2 text-slate-500">No inventory items found.</p>
                )}
            </div>
        </section>
    );
};

export default Inventory;
