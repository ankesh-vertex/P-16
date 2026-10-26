const categoryStyles = {
  Electronics: {
    emoji: "🎧",
    color: "bg-blue-50",
  },
  Clothing: {
    emoji: "👖",
    color: "bg-pink-50",
  },
  Accessories: {
    emoji: "⌚",
    color: "bg-amber-50",
  },
  Books: {
    emoji: "📚",
    color: "bg-emerald-50",
  },
  Other: {
    emoji: "📦",
    color: "bg-violet-50",
  },
};

export default function ProductCard({ product }) {
  const style =
    categoryStyles[product.category] || categoryStyles.Other;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div
        className={`mb-4 flex h-24 items-center justify-center rounded-xl text-5xl ${style.color}`}
      >
        {style.emoji}
      </div>

      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
        {product.category}
      </span>

      <h3 className="mt-3 break-words text-lg font-bold text-slate-800">
        {product.name}
      </h3>

      <p className="mt-2 text-2xl font-extrabold text-violet-700">
        ₹{product.price.toLocaleString("en-IN", {
          maximumFractionDigits: 2,
        })}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm text-slate-500">
          Available stock
        </span>
        <span className="rounded-lg bg-emerald-50 px-3 py-1 font-bold text-emerald-700">
          {product.quantity}
        </span>
      </div>
    </article>
  );
}