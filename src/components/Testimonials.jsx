import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Evermob transformed our user acquisition strategy. We saw a 340% increase in high-quality installs within the first quarter.",
    name: "Sarah Mitchell",
    role: "Head of Growth",
    company: "TechFlow Inc.",
    avatar: "SM",
  },
  {
    quote: "Their data-driven approach and transparent reporting gave us complete visibility into our campaign performance. Truly exceptional partners.",
    name: "James Rodriguez",
    role: "CMO",
    company: "AppVerse Studios",
    avatar: "JR",
  },
  {
    quote: "Working with Evermob felt like having an extension of our own team. Their expertise in mobile growth is unmatched in the industry.",
    name: "Emily Chen",
    role: "VP of Marketing",
    company: "MobiGrow",
    avatar: "EC",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            What Our{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from the teams we've helped scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-white backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 relative overflow-hidden">
                
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
                    <Quote className="w-6 h-6 text-indigo-600 group-hover:text-white transition" />
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-slate-700 leading-relaxed mb-8 text-base">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                    {testimonial.avatar}
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-slate-600">
                      {testimonial.role},{" "}
                      <span className="text-indigo-600">
                        {testimonial.company}
                      </span>
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

          ))}
        </div>

      </div>
    </section>
  );
};