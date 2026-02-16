const testimonials = [
  {
    name: "Ahmad K.",
    role: "E-commerce Store Owner, Lebanon",
    quote:
      "Chinahub transformed my business. I went from struggling to find reliable suppliers to receiving quality products at my door within weeks. The quality inspection photos give me total peace of mind.",
    rating: 5,
  },
  {
    name: "Fatima R.",
    role: "Dropshipper, UAE",
    quote:
      "I started with just 5 pieces to test the market, and now I order hundreds monthly. No other sourcing company lets you start this small. The app makes tracking everything effortless.",
    rating: 5,
  },
  {
    name: "Omar M.",
    role: "Retail Business Owner, Saudi Arabia",
    quote:
      "What impressed me most is the transparency. No hidden fees, clear timelines, and the team communicates in Arabic which makes everything easier. Highly recommended for MENA businesses.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-secondary"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-charcoal-light/70">
            Real businesses, real results. Here&apos;s what our clients experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 flex-1 text-charcoal-light/80 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-sm text-charcoal-light/50">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
