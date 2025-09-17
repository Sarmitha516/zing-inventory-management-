import CartItem from "./CartItem";
import { useCart } from "../../context/CartContext";
import { useCartDispatch } from "../../context/CartContext";
import { useInventoryDispatch } from "../../context/InventoryContext";
import { useSalesDispatch } from "../../context/SalesContext";

export default function Cart() {
    const inventoryDispatch = useInventoryDispatch();
    const cartItemsFromContext = useCart();
    const cartDispatch = useCartDispatch();
    const saleDispatch = useSalesDispatch();
    let count = 0;
    let cartValue = 0;
    if (cartItemsFromContext.length > 0)
        cartItemsFromContext.forEach((item) => {
            cartValue = cartValue + (item.price * item.quantity);
            count = count + (item.quantity);
        });

    return (
        <section className="relative w-full min-h-[calc(100vh-120px)]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/BG.png')" }}
            />
            <div className="relative z-10 pt-4 pb-4 flex flex-col items-center">
                <div className="w-full max-w-4xl bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-purple-200/40 p-5">
                <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent text-center mb-3">Your Cart</h1>
                {count === 0 ? (
                    <p className="text-lg text-slate-600 text-center">Your cart is empty.</p>
                ) : (
                    <div className="flex flex-col items-center">
                        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 text-slate-800">
                            <span className="px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm">Items: <b>{count}</b></span>
                            <span className="px-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm">Total: <b>₹{cartValue.toFixed(2)}</b></span>
                            <div className="flex items-center gap-2 mt-1 sm:mt-0">
                                <button onClick={() => {
                                    cartItemsFromContext.forEach((cartItem) => {
                                        inventoryDispatch({
                                            type: 'STOCK_SOLD',
                                            productName: cartItem.productName,
                                            stock: cartItem.quantity,
                                        })
                                    });
                                    saleDispatch({
                                        type: 'NEW_SALE',
                                        saleValue: cartValue,
                                        products: cartItemsFromContext,
                                    });
                                    cartDispatch({
                                        type: 'EMPTY_CART',
                                    });
                                    alert('Checkout successful! Inventory has been updated.');
                                }} className="px-4 py-2 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition">Checkout</button>
                                <button onClick={() => {
                                    cartDispatch({
                                        type: 'EMPTY_CART',
                                    });
                                }} className="px-4 py-2 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 transition">Clear</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
                {count > 0 && (
                    <div className="w-full max-w-5xl mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {cartItemsFromContext.map((product) => (
                            <CartItem key={product.productName} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
