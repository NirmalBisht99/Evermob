import { ArrowDown, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4
      bg-gradient-to-b from-[#f6fbfa] to-transparent overflow-hidden"
    >
      {/* PREMIUM BACKGROUND LIGHT WASH */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[32%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute left-1/2 top-[48%] h-[300px] w-[520px] -translate-x-1/2 rounded-full bg-orange-200/15 blur-[120px]" />
      </div>

      {/* MAIN CONTENT */}
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* BADGE */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full
              border border-indigo-400/20 bg-white/80 backdrop-blur shadow-sm">
              <Sparkles className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium text-slate-600">
                Performance-driven mobile growth
              </span>
            </div>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl
            font-extrabold tracking-[-0.02em] leading-tight">
            <span className="block text-slate-900">
              Turn app installs into
            </span>
            <span className="block mt-2 text-brand-highlight">
              scalable growth
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            EverMob powers app success through{" "}
            <span className="font-semibold text-slate-800">
              intelligent user acquisition
            </span>{" "}
            and{" "}
            <span className="font-semibold text-slate-800">
              data-driven growth strategies
            </span>.
          </p>

          {/* CTA */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
              href="#services"
              className="inline-flex items-center justify-center
              rounded-full px-6 py-3 text-sm font-semibold
              bg-slate-900 text-white hover:bg-slate-800 transition
              shadow-[0_8px_24px_rgba(15,23,42,0.18)]"
            >
             Explore Services
            </a>
          <a
  href="#contact"
  className="inline-flex items-center justify-center
    rounded-full px-6 py-3 text-sm font-semibold
    border border-slate-800 text-slate-900  bg-white
    hover:bg-slate-100 hover:border-slate-900 transition"
>
  Contact Us
</a>
          </div>

        </div>
      </div>
      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-sm text-slate-500 animate-bounce"
        >
          <ArrowDown className="h-5 w-5" />
          Scroll Down
        </a>
      </div>
    </section>
  );
};
