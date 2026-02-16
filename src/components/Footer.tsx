export default function Footer() {
  return (
    <footer className="bg-charcoal py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-white font-bold text-sm">
                C
              </div>
              <span className="text-lg font-bold text-white">
                China<span className="text-secondary">hub</span>
              </span>
            </div>
            <p className="text-sm text-white/40 italic">
              Your Far East Connection
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/30">
            &copy; 2026 Chinahub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
