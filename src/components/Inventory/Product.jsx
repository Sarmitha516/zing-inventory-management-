import { useState } from "react";
import { useInventoryDispatch } from "../../context/InventoryContext";

const Product = ({ product, alertValue }) => {
    const [addStock, setAddStock] = useState(0)
    const inventoryDispatch = useInventoryDispatch()

    return (
        <div className={`bg-white/90 backdrop-blur rounded-2xl shadow-lg border p-4 flex flex-col ${
            product.stock < alertValue ? "border-rose-300/60" : "border-purple-200/40"
        }`}>
            <div className="flex items-start justify-between">
                <h1 className="font-extrabold text-lg text-slate-900 line-clamp-1">{product.productName}</h1>
                {product.stock < alertValue && (
                    <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-700 border border-rose-200">Low stock</span>
                )}
            </div>
            <div className="mt-3 rounded-xl overflow-hidden border border-slate-200 bg-white">
                <div className="w-full h-60">
                    <img
                        src={product.imageUrl}
                        alt={product.productName}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <p className="text-base mt-3 text-slate-700">Price: ₹ {product.price.toFixed(2)}</p>
            <p className="text-sm text-slate-600">Stock Available: {product.stock}</p>
            <div className="mt-3 flex items-center gap-2">
                <label htmlFor="new-stock-qty" className="text-slate-700">Add Stock</label>
                <input
                    onChange={(e) => {
                        setAddStock(e.target.value);
                    }}
                    className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition w-28"
                    value={addStock}
                    type="number"
                    name="new-stock-qty"
                    id="new-stock-qty"
                />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                    onClick={() => {
                        setAddStock(0);
                        inventoryDispatch({
                            type: "STOCK_ADDED",
                            productName: product.productName,
                            stock: addStock,
                        });
                    }}
                    className="w-full py-2.5 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition"
                >
                    Update Stock
                </button>
                <button
                    onClick={() => {
                        if (!window.confirm(`Remove ${product.productName} from inventory?`)) return;
                        inventoryDispatch({
                            type: "REMOVE_PRODUCT",
                            productName: product.productName,
                        });
                    }}
                    className="w-full py-2.5 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 transition"
                >
                    Remove Item
                </button>
            </div>
        </div>
    );
};

export default Product;
