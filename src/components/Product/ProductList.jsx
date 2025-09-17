import Product from "./Product";

export default function ProductList({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {products.map((product) => (
                <Product key={product.productName} product={product} />
            ))}
        </div>
    );
}
