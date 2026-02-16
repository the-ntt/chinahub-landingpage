export default function AppPromo() {
  return (
    <section id="app" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 mb-6">
              <svg className="h-4 w-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              Now available on iOS
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Manage Everything from Your Phone
            </h2>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">
              Source products, track orders, chat with our team, and manage payments — all in one powerful app.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Browse and source products instantly",
                "Real-time order tracking",
                "Direct chat with your sourcing agent",
                "Secure in-app payments",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://apps.apple.com/lb/app/chinahub-pro/id6749041591"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-primary font-semibold transition-all hover:shadow-lg hover:shadow-white/10 hover:scale-105"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-charcoal-light/60">Download on the</div>
                  <div className="text-lg leading-tight">App Store</div>
                </div>
              </a>
              <div className="text-sm text-white/40 self-center">
                Android coming soon
              </div>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[280px] h-[560px] rounded-[3rem] bg-gradient-to-b from-gray-800 to-gray-900 p-3 shadow-2xl shadow-black/50">
                <div className="w-full h-full rounded-[2.4rem] bg-gradient-to-br from-primary-light to-charcoal overflow-hidden flex flex-col items-center justify-center text-center p-8">
                  {/* Simulated app screen */}
                  <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                    <span className="text-3xl font-bold text-secondary">C</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Chinahub Pro</h3>
                  <p className="text-white/50 text-sm mb-8">Source smarter. Ship faster.</p>

                  {/* Simulated UI elements */}
                  <div className="w-full space-y-3">
                    <div className="h-10 rounded-lg bg-white/10 flex items-center px-4">
                      <div className="w-3 h-3 rounded-full bg-secondary/60 mr-3" />
                      <div className="h-2 w-24 rounded bg-white/20" />
                    </div>
                    <div className="h-10 rounded-lg bg-white/10 flex items-center px-4">
                      <div className="w-3 h-3 rounded-full bg-green-400/60 mr-3" />
                      <div className="h-2 w-20 rounded bg-white/20" />
                    </div>
                    <div className="h-10 rounded-lg bg-white/10 flex items-center px-4">
                      <div className="w-3 h-3 rounded-full bg-blue-400/60 mr-3" />
                      <div className="h-2 w-28 rounded bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-[4rem] bg-secondary/10 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
