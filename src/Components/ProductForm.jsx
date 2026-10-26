import { useState } from "react";

export default function ProductForm({ onAddProduct }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddProduct({
      id: Date.now(),
      name: form.name.trim(),
      price: Number(form.price),
      category: form.category,
      quantity: Number(form.quantity),
    });

    setForm({
      name: "",
      price: "",
      category: "",
      quantity: "",
    });
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-100";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-bold text-slate-800">
        Add New Product
      </h2>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Product Name
        </label>
        <input
          className={inputClass}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Wireless Headphones"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Price (₹)
          </label>
          <input
            className={inputClass}
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="999"
            min="0.01"
            step="0.01"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Quantity
          </label>
          <input
            className={inputClass}
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            placeholder="10"
            min="0"
            step="1"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Category
        </label>
        <select
          className={inputClass}
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Books">Books</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-violet-700 active:scale-[0.98]"
      >
        + Add Product
      </button>
    </form>
  );
}