import { useCartDispatch } from "../../context/CartContext";
import { useCart } from "../../context/CartContext";

export default function Product({ product }) {
    const cartItems = useCart();
    const dispatchToCart = useCartDispatch();

    const onCartToggle = () => {
        if (cartItems.some((item) => item.productName === product.productName)) {
            dispatchToCart({
                type: "removed",
                ...product,
            });
        } else {
            dispatchToCart({
                type: "added",
                ...product,
            });
        }
    };

    return (
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-4 flex flex-col">
            <div className="flex-1">
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
            </div>
            <button
                onClick={onCartToggle}
                className={`mt-4 w-full py-2.5 rounded-lg font-semibold text-white shadow-md transition ${
                    cartItems.some((item) => item.productName === product.productName)
                        ? "bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500"
                }`}
            >
                {cartItems.some((item) => item.productName === product.productName)
                    ? "Remove from Cart"
                    : "Add to Cart"}
            </button>
        </div>
    );
}
