import { motion } from "framer-motion";
import { Smartphone, BarChart3, Globe } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "User Acquisition Campaigns",
    subtitle: "Strategic ad placements",
    desc: "Drive targeted app installs through strategic ad placements on top-performing channels including social media, programmatic networks, and direct publisher partnerships. We focus on quality traffic, not just volume.",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    subtitle: "Measured and maximized",
    desc: "We run data-backed performance campaigns that are fully optimized for CPI, CPA, and ROAS goals. From install to in-app conversion, every dollar is measured and maximized.",
  },
  {
    icon: Globe,
    title: "Global Traffic Supply",
    subtitle: "Premium traffic worldwide",
    desc: "Access a vast network of global inventory with traffic from premium sources. We target users across geographies with the highest potential for retention and monetization.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 }
  })
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="w-full px-6 md:px-12 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900">
            What we offer
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl text-lg">
            Comprehensive mobile growth solutions tailored to your app's success
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              
              {/* Gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-100 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-cyan-500 transition-all duration-300">
                  <s.icon
                    size={28}
                    className="text-indigo-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-1 text-slate-900">
                  {s.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-indigo-600 font-medium mb-3">
                  {s.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};