import { motion } from "framer-motion";
import { Smartphone, BarChart3, Globe } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "USER ACQUISITION CAMPAIGNS",
    subtitle: "Strategic ad placements",
    desc: "Drive targeted app installs through strategic ad placements on top-performing channels including social media, programmatic networks, and direct publisher partnerships. We focus on quality traffic, not just volume.",
  },
  {
    icon: BarChart3,
    title: "PERFORMANCE MARKETING",
    subtitle: "Measured and maximized",
    desc: "We run data-backed performance campaigns that are fully optimized for CPI, CPA, and ROAS goals. From install to in-app conversion, every dollar is measured and maximized.",
  },
  {
    icon: Globe,
    title: "GLOBAL TRAFFIC SUPPLY",
    subtitle: "Premium traffic worldwide",
    desc: "Access a vast network of global inventory with traffic from premium sources. We target users across geographies with the highest potential for retention and monetization.",
  },
];

/* Animation container */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

/* Card animation */
const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export const Services = () => {
  return (
    <section id="services" className="relative py-28 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-medium mb-4 border border-indigo-500/30">
            Our Services
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            What we <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">offer</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl text-lg">
            Comprehensive mobile growth solutions tailored to your app's success
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              className="group relative bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow hover layer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-7">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center shadow-inner group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-cyan-500 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-indigo-400 group-hover:text-white transition" />
                  </div>
                </div>

                {/* Title */}
                <p className="text-indigo-400 text-xs font-bold tracking-[0.2em] mb-3">
                  {service.title}
                </p>

                {/* Subtitle */}
                <h3 className="text-white text-2xl font-semibold mb-4 leading-snug">
                  {service.subtitle}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};