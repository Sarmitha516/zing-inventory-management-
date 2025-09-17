import { useCartDispatch } from "../../context/CartContext";
import { useInventory } from "../../context/InventoryContext";

export default function CartItem({ product }) {
    const dispatchToCart = useCartDispatch();
    const inventory = useInventory();
    const productInInventory = inventory.find(item => item.productName === product.productName);

    const stockAvailable = productInInventory ? productInInventory.stock : 0;

    return (
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-4 flex flex-col">
            <h1 className="font-extrabold text-lg text-slate-900 text-center line-clamp-1">{product.productName}</h1>
            <div className="mt-3 rounded-xl overflow-hidden border border-slate-200 bg-white">
                <div className="w-full h-60">
                    <img
                        src={product.imageUrl}
                        alt={product.productName}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <p className="text-base mt-3 text-slate-700 text-center">Price: ₹ {product.price.toFixed(2)}</p>
            <div className="mt-3 flex items-center justify-center gap-2">
                {product.quantity > 1 ? (
                    <button
                        onClick={() => {
                            dispatchToCart({
                                type: 'DEC_QTY',
                                ...product,
                            });
                        }}
                        className="px-3 py-1.5 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 transition"
                    >
                        -
                    </button>
                ) : (
                    <button disabled className="px-3 py-1.5 rounded-lg font-semibold text-white shadow-md bg-rose-300/70">
                        -
                    </button>
                )}
                <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-800">{product.quantity}</span>
                {product.quantity < stockAvailable ? (
                    <button
                        onClick={() => {
                            dispatchToCart({
                                type: 'INC_QTY',
                                ...product,
                            });
                        }}
                        className="px-3 py-1.5 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition"
                    >
                        +
                    </button>
                ) : (
                    <button disabled className="px-3 py-1.5 rounded-lg font-semibold text-white shadow-md bg-slate-300/80">
                        +
                    </button>
                )}
            </div>
            <button
                onClick={() => {
                    dispatchToCart({
                        type: 'removed',
                        ...product,
                    });
                }}
                className="mt-3 w-full py-2.5 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 transition"
            >
                Remove from Cart
            </button>
        </div>
    );
}
