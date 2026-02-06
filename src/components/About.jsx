import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-secondary text-secondary-foreground"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">
            04 — About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3 mb-6">
            Who we are
          </h2>

          <p className="text-lg text-primary font-medium italic mb-8 max-w-2xl mx-auto">
            "Evermob powers app success through intelligent user acquisition strategies."
          </p>

          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-6">
            We are the decisive factor behind your success
          </h3>

          <p className="text-secondary-foreground/80 leading-relaxed max-w-3xl mx-auto text-lg">
            We specialize in app marketing, focusing on generating high-quality
            installs through targeted advertising and promotional offers. By
            leveraging top-tier ad networks and advanced performance tracking,
            we ensure your app reaches the right audience—at the right time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500M+", label: "App Installs" },
            { value: "120+", label: "Clients Worldwide" },
            { value: "50+", label: "Countries" },
            { value: "99%", label: "Client Retention" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold font-heading text-primary">
                {stat.value}
              </p>

              <p className="text-sm text-secondary-foreground/60 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
