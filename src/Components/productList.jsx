import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 text-center">
        <div className="mb-3 text-5xl">🛍️</div>
        <h3 className="text-lg font-bold text-slate-700">
          No products yet
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Add your first product using the form.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}