import { useInventory } from "../context/InventoryContext";
import { useCart } from "../context/CartContext";
import { useSales } from "../context/SalesContext";

export default function Dashboard() {
    const inventory = useInventory();
    const cartItems = useCart();
    const sales = useSales();

    const totalProducts = inventory.length;

    const totalStock = inventory.reduce(
        (total, product) => total + Number(product.stock),
        0
    );

    const lowStockProducts = inventory.filter(
        (product) => product.stock > 0 && product.stock < 10
    ).length;

    const cartItemsCount = cartItems.reduce(
        (total, item) => total + Number(item.quantity),
        0
    );

    const cartValue = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalSales = sales.length;

    const totalRevenue = sales.reduce(
        (total, sale) => total + Number(sale.saleValue),
        0
    );

    const productsSold = sales.reduce(
        (total, sale) =>
            total +
            sale.products.reduce(
                (productTotal, product) =>
                    productTotal + Number(product.quantity),
                0
            ),
        0
    );

    return (
        <section className="relative w-full min-h-[calc(100vh-120px)]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/BG.png')" }}
            />

            <div className="relative z-10 px-4 py-8">

                <h1 className="text-3xl font-extrabold text-center text-slate-900 mb-8">
                    StockHub Dashboard
                </h1>

                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {/* Total Products */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-6 text-center">
                        <p className="text-slate-500 font-semibold">Total Products</p>
                        <p className="text-3xl font-extrabold text-purple-700 mt-2">
                            {totalProducts}
                        </p>
                    </div>

                    {/* Total Stock */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-6 text-center">
                        <p className="text-slate-500 font-semibold">Total Stock</p>
                        <p className="text-3xl font-extrabold text-blue-700 mt-2">
                            {totalStock}
                        </p>
                    </div>

                    {/* Low Stock */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-6 text-center">
                        <p className="text-slate-500 font-semibold">Low Stock</p>
                        <p className="text-3xl font-extrabold text-orange-500 mt-2">
                            {lowStockProducts}
                        </p>
                    </div>

                    {/* Cart Items */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-6 text-center">
                        <p className="text-slate-500 font-semibold">Cart Items</p>
                        <p className="text-3xl font-extrabold text-green-600 mt-2">
                            {cartItemsCount}
                        </p>
                    </div>

                    {/* Cart Value */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-6 text-center">
                        <p className="text-slate-500 font-semibold">Cart Value</p>
                        <p className="text-3xl font-extrabold text-pink-600 mt-2">
                            ₹{cartValue.toFixed(2)}
                        </p>
                    </div>

                    {/* Total Sales */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-6 text-center">
                        <p className="text-slate-500 font-semibold">Total Sales</p>
                        <p className="text-3xl font-extrabold text-indigo-600 mt-2">
                            {totalSales}
                        </p>
                    </div>

                    {/* Total Revenue */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-6 text-center">
                        <p className="text-slate-500 font-semibold">Total Revenue</p>
                        <p className="text-3xl font-extrabold text-emerald-600 mt-2">
                            ₹{totalRevenue.toFixed(2)}
                        </p>
                    </div>

                    {/* Products Sold */}
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-6 text-center">
                        <p className="text-slate-500 font-semibold">Products Sold</p>
                        <p className="text-3xl font-extrabold text-cyan-600 mt-2">
                            {productsSold}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}