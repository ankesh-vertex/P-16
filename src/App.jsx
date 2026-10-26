import { useState } from "react";
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/productList";

export default function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-blue-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">

        <header className="mb-8 rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-600 p-7 text-white shadow-lg sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            Inventory workspace
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Product Management
          </h1>

          <p className="mt-3 max-w-xl text-violet-100">
            Manage your products, prices, categories, and stock
            in one simple dashboard.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white/15 px-5 py-3">
            <span className="text-2xl">📦</span>
            <div>
              <p className="text-sm text-violet-100">
                Total Products
              </p>
              <p className="text-2xl font-bold">
                {products.length}
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[350px_1fr]">
          <ProductForm onAddProduct={addProduct} />

          <section>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Product Inventory
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your added products appear here.
                </p>
              </div>

              <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                {products.length} items
              </span>
            </div>

            <ProductList products={products} />
          </section>
        </div>

        <footer className="mt-10 text-center text-sm text-slate-400">
          Built with React useState() and Tailwind CSS
        </footer>
      </div>
    </main>
  );
}