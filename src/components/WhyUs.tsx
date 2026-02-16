const reasons = [
  {
    text: "15+ years in China sourcing",
    icon: (
      <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    text: "Offices in Shanghai, Yiwu, Guangzhou & Lebanon",
    icon: (
      <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    text: "Featured on Shark Tank Lebanon",
    icon: (
      <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    text: "Start from just 1 piece — no minimums",
    icon: (
      <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    text: "Transparent pricing — no hidden fees",
    icon: (
      <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    text: "Dedicated support in English & Arabic",
    icon: (
      <svg className="h-5 w-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
];

const stats = [
  { value: "1M+", label: "Followers" },
  { value: "15+", label: "Years Experience" },
  { value: "4", label: "Offices in China" },
  { value: "50K+", label: "Orders Delivered" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Why 1M+ Customers Trust Us
            </h2>
            <p className="mt-4 text-lg text-charcoal-light/70">
              We&apos;ve built our reputation on reliability, transparency, and
              results. Here&apos;s what sets Chinahub apart.
            </p>

            <div className="mt-10 space-y-5">
              {reasons.map((reason) => (
                <div
                  key={reason.text}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0">{reason.icon}</div>
                  <span className="text-charcoal font-medium">
                    {reason.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-8 text-center shadow-sm border border-gray-100"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-charcoal-light/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
