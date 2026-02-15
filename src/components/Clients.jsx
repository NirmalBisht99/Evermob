import { motion } from "framer-motion";

import albertBlue from "../assets/albertBlue.png";
import binance from "../assets/binance.png";
import bwin from "../assets/bwin.png";
import githubLogo from "../assets/githubLogo.png";
import heetch from "../assets/heetch.png";
import toYou from "../assets/toYou.png";

const clients = [
  { name: "Albert Blue", logo: albertBlue, gradient: "from-blue-100 to-indigo-100" },
  { name: "Binance", logo: binance, gradient: "from-yellow-100 to-orange-100" },
  { name: "Bwin", logo: bwin, gradient: "from-green-100 to-emerald-100" },
  { name: "TutuApp", logo: githubLogo, gradient: "from-slate-100 to-gray-100" },
  { name: "Heetch", logo: heetch, gradient: "from-purple-100 to-pink-100" },
  { name: "To You", logo: toYou, gradient: "from-cyan-100 to-blue-100" },
];

export const Clients = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            Our Partners
          </span>
         
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Trusted Growth Partners
          </h2>

          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-lg">
            Collaborating with leading performance networks and global media platforms.
          </p>
        </motion.div>

        {/* Premium Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >

              {/* Glow Layer */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 opacity-0 group-hover:opacity-50 blur-xl transition duration-500" />

              {/* Glass Card with Gradient Background */}
              <div className={`relative backdrop-blur-xl bg-gradient-to-br ${client.gradient} border border-slate-200 rounded-3xl h-48 flex flex-col items-center justify-center shadow-sm group-hover:shadow-2xl transition duration-500 overflow-hidden`}>

                {/* Logo */}
                <div className="relative z-10 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 max-w-[200px] object-contain opacity-90 group-hover:opacity-100 transition filter drop-shadow-lg"
                  />
                </div>

                {/* Company Name - Shows on Hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg text-center">
                    {client.name}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};