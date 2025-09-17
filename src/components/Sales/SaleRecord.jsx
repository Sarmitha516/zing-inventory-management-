const SaleRecord = ({ sale, saleId }) => {
    return (
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-purple-200/40 p-4">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-extrabold text-slate-900">Sale #{saleId + 1}</h2>
                <span className="text-sm text-slate-500">
                    {new Date(sale.datetime).toLocaleString()}
                </span>
            </div>
            <p className="mb-2 text-slate-800">
                <strong>Total Sale Value:</strong> ₹{sale.saleValue.toFixed(2)}
            </p>
            <p className="mb-2 text-slate-800">
                <strong>Cart Details:</strong>
            </p>
            <ul className="list-disc list-inside pl-4 text-slate-700">
                {sale.products.map((product) => (
                    <li key={product.productName}>
                        {product.productName} ({product.quantity}) - ₹
                        {(product.price * product.quantity).toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SaleRecord;
