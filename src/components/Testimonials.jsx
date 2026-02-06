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
    <section className="py-20 md:py-28 bg-gradient-to-b from-white/50 to-teal-50/30">
      <div className="container mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-600">
              Clients Say
            </span>
          </h2>
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
              <div className="h-full bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-teal-100/50 shadow-sm hover:shadow-xl hover:border-orange-200/50 transition-all duration-300 relative overflow-hidden">
                
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-orange-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quote icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-orange-100 flex items-center justify-center">
                    <Quote className="w-6 h-6 text-teal-600" />
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-teal-100/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-orange-400 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-muted-foreground">
                      {testimonial.role},{" "}
                      <span className="text-teal-600">
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

