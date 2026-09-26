const SaleRecord = ({ sale, saleId }) => {
    return (
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-5">

            {/* Sale Header */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
                <h2 className="text-lg font-extrabold text-slate-900">
                    Sale #{saleId + 1}
                </h2>

                <span className="text-sm text-slate-500">
                    {new Date(sale.datetime).toLocaleString()}
                </span>
            </div>

            {/* Sale Total */}
            <div className="mb-4 p-3 rounded-xl bg-purple-50 border border-purple-100">
                <p className="text-slate-600 text-sm">
                    Total Sale Value
                </p>

                <p className="text-xl font-extrabold text-purple-700">
                    ₹{Number(sale.saleValue).toFixed(2)}
                </p>
            </div>

            {/* Products */}
            <h3 className="font-bold text-slate-800 mb-3">
                Products Sold
            </h3>

            <div className="space-y-2">
                {sale.products.map((product) => (
                    <div
                        key={product.productName}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-3 rounded-lg bg-white border border-slate-200"
                    >
                        <div>
                            <p className="font-semibold text-slate-800">
                                {product.productName}
                            </p>

                            <p className="text-sm text-slate-500">
                                Quantity: {product.quantity} × ₹{Number(product.price).toFixed(2)}
                            </p>
                        </div>

                        <p className="font-bold text-green-600">
                            ₹{(product.price * product.quantity).toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SaleRecord;