import { motion } from "framer-motion";

const categories = [
  {
    number: "01",
    label: "Brand Marketing",
    subtitle: "Growth Engines",
    blocks: [
      {
        title: "User Acquisition",
        desc: "Evermob's user acquisition strategy focuses on generating high-quality installs through targeted ad campaigns and promotional offers. We ensure your app reaches users who are most likely to engage, convert, and stay.",
        tags: ["Marketing Research", "Messaging", "Positioning", "Persona/Segmentation", "Performance Optimization"],
      },
      {
        title: "Search Arbitrage",
        desc: "We buy traffic at a lower cost and redirect it to monetized pages with search results—maximizing profitability through smart traffic flows and real-time optimization.",
        tags: ["Traffic Buying", "Monetization Strategy", "Campaign Optimization", "Performance Analytics", "ROI Focus"],
      },
      {
        title: "OEM Marketing",
        desc: "We leverage OEM partnerships to pre-install and recommend your app on devices, reaching users at the point of activation with zero friction.",
        tags: ["Customer Research", "B2B Targeting", "Digital Integration", "Funnel Positioning", "Strategic Content"],
      },
    ],
  },
  {
    number: "02",
    label: "Digital Experience",
    subtitle: "Performance",
    blocks: [
      {
        title: "Performance Mobile Advertising",
        desc: "Evermob is a performance-driven mobile advertising company headquartered in Dubai, with operational teams in the Philippines and India. We specialize in AI and ML-powered CPI and CPA in-app campaigns across Tier 1 markets.",
        tags: ["AI ML-Powered Campaigns", "Tier 1 Market Focus", "CPI & CPA Models", "High-Volume Quality Users"],
      },
      {
        title: "Vertical Expertise",
        desc: "Our core verticals include Gaming, Sportsbet & Casino, Dating, E-commerce, and Utilities. We deliver high volumes of quality users—CPA deposits, subscriptions, trials, and high-LTV conversions.",
        tags: ["Gaming", "Sportsbet & Casino", "Dating", "Utilities", "Top Geos"],
      },
      {
        title: "Traffic & Transparency",
        desc: "All traffic is 100% in-house, sourced from DSPs, premium traffic exchanges, and a wide network of local in-app developers. It's fully transparent, with the ability to pass all required parameters.",
        tags: ["In-house Traffic", "DSPs & Traffic Exchanges", "Local In-App Developers"],
      },
    ],
  },
  {
    number: "03",
    label: "Data Science",
    subtitle: "Quality",
    blocks: [
      {
        title: "Quality & Compliance",
        desc: "To maintain quality and compliance, we use a multi-layer anti-fraud setup combining our proprietary tools, Clickshield, and Protected Media, ensuring brand safety and eliminating non-compliant inventory.",
        tags: ["Multi-layer Anti-Fraud System", "In-house Tools", "Clickshield & Protected Media", "Brand Safety & Compliance"],
      },
      {
        title: "Performance Focus",
        desc: "Our approach is simple: we focus solely on performance and results, with real-time optimization to ensure your ads reach the right audience efficiently.",
        tags: ["Real-time Optimization", "Performance & Results Focus", "Efficient Audience Targeting"],
      },
    ],
  },
];

export const WhatWeDo = () => {
  return (
    <section id="WhatWeDo" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            Our Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            What We <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Do</span>
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            Comprehensive mobile growth solutions across every stage of your app's journey
          </p>
        </motion.div>

        <div className="space-y-20">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent opacity-40">
                  {cat.number}
                </span>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600">
                    {cat.label}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {cat.subtitle}
                  </h3>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.blocks.map((block, blockIndex) => (
                  <motion.div
                    key={block.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: blockIndex * 0.1, duration: 0.5 }}
                    className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  >
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Title */}
                      <h4 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {block.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {block.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {block.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};