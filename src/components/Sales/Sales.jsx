import { useSales } from "../../context/SalesContext";
import SaleRecord from "./SaleRecord";

const Sales = () => {
    const sales = useSales();

    const totalSales = sales.length;

    const totalRevenue = sales.reduce(
        (total, sale) => total + Number(sale.saleValue),
        0
    );

    const totalProductsSold = sales.reduce(
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

            <div className="relative z-10 pt-4 pb-6 flex flex-col items-center">

                <div className="w-full max-w-4xl bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-purple-200/40 p-5">

                    <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent text-center mb-5">
                        Sales Record
                    </h1>

                    {/* Sales Summary */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">

                        <div className="bg-white rounded-xl shadow-md border border-purple-200/40 p-4 text-center">
                            <p className="text-slate-500 font-semibold">
                                Total Sales
                            </p>
                            <p className="text-2xl font-extrabold text-purple-700 mt-1">
                                {totalSales}
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-md border border-purple-200/40 p-4 text-center">
                            <p className="text-slate-500 font-semibold">
                                Total Revenue
                            </p>
                            <p className="text-2xl font-extrabold text-green-600 mt-1">
                                ₹{totalRevenue.toFixed(2)}
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-md border border-purple-200/40 p-4 text-center">
                            <p className="text-slate-500 font-semibold">
                                Products Sold
                            </p>
                            <p className="text-2xl font-extrabold text-blue-600 mt-1">
                                {totalProductsSold}
                            </p>
                        </div>

                    </div>

                    {sales.length > 0 ? (
                        <div className="grid gap-4">
                            {sales.map((sale, index) => (
                                <SaleRecord
                                    key={index}
                                    sale={sale}
                                    saleId={index}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className="text-slate-600 text-center">
                            No sales recorded yet.
                        </p>
                    )}

                </div>

            </div>
        </section>
    );
};

export default Sales;