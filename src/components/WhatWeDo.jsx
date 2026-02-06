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
    <section id="WhatWeDo" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            What We <span className="text-gradient">Do</span>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {categories.map((cat) => (
            <motion.div
              key={cat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl font-bold font-heading text-primary/20">
                  {cat.number}
                </span>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary">
                    {cat.label}
                  </p>
                  <h3 className="text-2xl font-bold font-heading">
                    {cat.subtitle}
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.blocks.map((block) => (
                  <div
                    key={block.title}
                    className="bg-card border border-border rounded-2xl p-6 hover:shadow-card-hover transition-shadow"
                  >
                    <h4 className="text-lg font-bold font-heading mb-2">
                      {block.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {block.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {block.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};