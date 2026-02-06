import { motion } from "framer-motion";
import { Target, Users, TrendingUp } from "lucide-react";

export const WhyUs = () => {
  const features = [
    {
      icon: Target,
      title: "STRATEGIC AD CAMPAIGNS",
      heading: "Promote your app across high-performing channels.",
      description: "We design and execute custom ad campaigns tailored to your app's niche and audience. By leveraging premium traffic sources, influencer networks, social media, and programmatic ad exchanges, we ensure your app gets visibility where it matters most."
    },
    {
      icon: Users,
      title: "CUSTOMER BASE GROWTH",
      heading: "Build a loyal and active user community.",
      description: "Beyond installs, we help build sustainable user communities through re-engagement campaigns, personalized user journeys, and push notification strategies. Our retention-focused approach ensures your users stay active."
    },
    {
      icon: TrendingUp,
      title: "DATA-DRIVEN OPTIMIZATION",
      heading: "Maximize ROI with real-time analytics.",
      description: "Our platform uses advanced analytics tools to monitor every step of the user journey. We track key metrics like install rates, retention, and in-app behavior to adjust campaigns in real time, boosting your ROAS."
    }
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

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,115,0,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-orange-500 font-semibold text-sm tracking-[0.25em] uppercase mb-4">
            02 — WHY US
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            How we do it
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={card}
              className="group relative bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/40 transition duration-500 hover:-translate-y-2"
            >
              {/* Glow hover layer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon */}
              <div className="relative mb-7">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center shadow-inner">
                  <feature.icon className="w-7 h-7 text-orange-500" />
                </div>
              </div>

              {/* Title */}
              <p className="text-orange-500 text-xs font-bold tracking-[0.2em] mb-4">
                {feature.title}
              </p>

              {/* Heading */}
              <h3 className="text-white text-2xl font-semibold mb-4 leading-snug">
                {feature.heading}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-teal-500 hover:bg-teal-600 shadow-lg flex items-center justify-center transition hover:scale-110">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

    </section>
  );
};
