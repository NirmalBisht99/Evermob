import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Evermob transformed our user acquisition strategy. We saw a 340% increase in high-quality installs within the first quarter.",
    name: "Sarah Mitchell",
    role: "Head of Growth",
    company: "Bwin Inc.",
    avatar: "SM",
  },
  {
    quote: "Their data-driven approach and transparent reporting gave us complete visibility into our campaign performance. Truly exceptional partners.",
    name: "James Rodriguez",
    role: "CMO",
    company: "Albert Blue",
    avatar: "JR",
  },
  {
    quote: "Working with Evermob felt like having an extension of our own team. Their expertise in mobile growth is unmatched in the industry.",
    name: "Emily Chen",
    role: "VP of Marketing",
    company: "Heetch",
    avatar: "EC",
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

export const Testimonials = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

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
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-4 border border-purple-500/30">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl text-lg">
            Don't just take our word for it — hear from the teams we've helped scale.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            
            <motion.div
              key={testimonial.name}
              variants={card}
              className="group relative bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow hover layer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">
                {/* Quote icon */}
                <div className="mb-7">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center shadow-inner group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-indigo-500 transition-all duration-300">
                    <Quote className="w-7 h-7 text-purple-400 group-hover:text-white transition" />
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-slate-300 leading-relaxed mb-8 text-base">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-700/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                    {testimonial.avatar}
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-slate-400">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-purple-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          ))}
        </motion.div>

      </div>
    </section>
  );
};