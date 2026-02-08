import { motion } from "framer-motion";
import { Target, Users, TrendingUp, MessageCircle } from "lucide-react";

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
    <section id="WhyUs" className="relative py-28 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

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
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            How we <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">do it</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl text-lg">
            Our proven approach to mobile app growth combines strategic thinking with cutting-edge technology
          </p>
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
              className="group relative bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow hover layer */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-7">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center shadow-inner group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-cyan-500 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-indigo-500 group-hover:text-white transition" />
                  </div>
                </div>

                {/* Title */}
                <p className="text-indigo-400 text-xs font-bold tracking-[0.2em] mb-4">
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
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Floating Chat Button - Cyan */}
      <motion.a
        href="#contact"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-600 shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Let's talk!
        </span>
      </motion.a>

    </section>
  );
};