import { useInventoryDispatch } from "../context/InventoryContext";

export default function AddProduct() {
    const dispatchToInventory = useInventoryDispatch()

    const onAddProduct = (e) => {
        e.preventDefault()

        const newProduct = {
            productName: e.target.productName.value,
            imageUrl: e.target.imageUrl.value,
            price: parseFloat(e.target.price.value),
            tags: e.target.tags.value.split(",").map((tag) => tag.trim()),
            stock: e.target.stock.value,
        }

        dispatchToInventory({
            type: 'NEW_PRODUCT',
            ...newProduct,
        })

        e.target.reset()
        alert("Product added successfully!")
    };

    return (
        <section className="relative w-full min-h-[calc(100vh-120px)]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/BG.png')" }}
            />
            <div className="relative z-10 max-w-lg mx-auto p-6 bg-white/90 backdrop-blur rounded-2xl shadow-xl mt-8 mb-6 border border-purple-200/40">
                <h1 className="text-center mb-6 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent">
                    Add New Product
                </h1>
                <form onSubmit={onAddProduct} className="space-y-5">
                <div>
                    <label
                        htmlFor="productName"
                        className="block text-sm font-semibold text-slate-700 mb-1"
                    >
                        Product Name
                    </label>
                    <input
                        id="productName"
                        type="text"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition"
                        placeholder="Enter product name"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="imageUrl"
                        className="block text-sm font-semibold text-slate-700 mb-1"
                    >
                        Product Image URL
                    </label>
                    <input
                        id="imageUrl"
                        type="text"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition"
                        placeholder="Enter image URL"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="price"
                        className="block text-sm font-semibold text-slate-700 mb-1"
                    >
                        Price
                    </label>
                    <input
                        id="price"
                        type="number"
                        step="0.01"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition"
                        placeholder="Enter price"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="stock"
                        className="block text-sm font-semibold text-slate-700 mb-1"
                    >
                        Stock
                    </label>
                    <input
                        id="stock"
                        type="number"
                        step="0.01"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition"
                        placeholder="Enter stock"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="tags"
                        className="block text-sm font-semibold text-slate-700 mb-1"
                    >
                        Tags (comma-separated)
                    </label>
                    <input
                        id="tags"
                        type="text"
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition"
                        placeholder="Enter tags, separated by commas"
                        required
                    />
                </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-2.5 px-4 rounded-lg font-semibold text-white shadow-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition focus:outline-none focus:ring-2 focus:ring-purple-300"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
