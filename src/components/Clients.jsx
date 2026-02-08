import { motion } from "framer-motion";

import albertBlue from "../assets/albertBlue.png";
import binance from "../assets/binance.png";
import bwin from "../assets/bwin.png";
import githubLogo from "../assets/githubLogo.png";
import heetch from "../assets/heetch.png";
import toYou from "../assets/toYou.png";

const clients = [
  { name: "Albert Blue", logo: albertBlue },
  { name: "Binance", logo: binance },
  { name: "Bwin", logo: bwin },
  { name: "GitHub", logo: githubLogo },
  { name: "Heetch", logo: heetch },
  { name: "To You", logo: toYou },
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
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-200 via-purple-200 to-cyan-200 opacity-0 group-hover:opacity-40 blur-xl transition duration-500" />

              {/* Glass Card */}
              <div className="relative backdrop-blur-xl bg-white/90 border border-slate-200 rounded-3xl h-36 flex items-center justify-center shadow-sm group-hover:shadow-xl transition duration-500">

                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 object-contain opacity-80 group-hover:opacity-100 transition"
                />

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};