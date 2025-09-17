import { useSales } from "../../context/SalesContext";
import SaleRecord from "./SaleRecord";

const Sales = () => {
    const sales = useSales();

    return (
        <section className="relative w-full min-h-[calc(100vh-120px)]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/BG.png')" }}
            />
            <div className="relative z-10 pt-4 pb-6 flex flex-col items-center">
                <div className="w-full max-w-4xl bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-purple-200/40 p-5">
                <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent text-center mb-3">Sales Record</h1>
                {sales.length > 0 ? (
                    <div className="grid gap-4">
                        {sales.map((sale, index) => (
                            <SaleRecord key={index} sale={sale} saleId={index} />
                        ))}
                    </div>
                ) : (
                    <p className="text-slate-600 text-center">No sales recorded yet.</p>
                )}
            </div>
            </div>
        </section>
    );
};

export default Sales;
