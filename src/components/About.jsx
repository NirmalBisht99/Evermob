import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-slate-900">
            Who we are
          </h2>

          {/* Enhanced quote box */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute -left-4 -top-4 text-6xl text-indigo-500/20 font-serif select-none">"</div>
            <motion.p 
              className="text-lg text-slate-700 font-medium italic bg-gradient-to-r from-indigo-50 via-purple-50 to-cyan-50 p-6 rounded-2xl border border-indigo-200/50 shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Evermob powers app success through intelligent user acquisition strategies.
            </motion.p>
            <div className="absolute -right-4 -bottom-4 text-6xl text-cyan-500/20 font-serif select-none">"</div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
            We are the decisive factor behind your success
          </h3>

          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-lg">
            We specialize in app marketing, focusing on generating high-quality
            installs through targeted advertising and promotional offers. By
            leveraging top-tier ad networks and advanced performance tracking,
            we ensure your app reaches the right audience—at the right time.
          </p>
        </motion.div>

        {/* Optional: Team/Office Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 mb-16"
        >
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            {/* Placeholder for team photo or office image */}
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <p className="text-slate-400">Team Photo / Office Image</p>
              {/* Replace with actual image:
              <img 
                src="/path-to-team-photo.jpg" 
                alt="EverMob Team"
                className="w-full h-full object-cover"
              />
              */}
            </div>
          </div>
        </motion.div>

        {/* Enhanced stats grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "500M+", label: "App Installs", color: "from-indigo-500 to-indigo-600" },
            { value: "120+", label: "Clients Worldwide", color: "from-purple-500 to-purple-600" },
            { value: "50+", label: "Countries", color: "from-indigo-500 to-cyan-500" },
            { value: "99%", label: "Client Retention", color: "from-cyan-500 to-indigo-500" },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <p className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};