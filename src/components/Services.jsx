// import { motion } from "framer-motion";
// import { Smartphone, BarChart3, Globe } from "lucide-react";

// const services = [
//   {
//     icon: Smartphone,
//     title: "User Acquisition Campaigns",
//     subtitle: "Strategic ad placements",
//     desc: "Drive targeted app installs through strategic ad placements on top-performing channels including social media, programmatic networks, and direct publisher partnerships. We focus on quality traffic, not just volume.",
//   },
//   {
//     icon: BarChart3,
//     title: "Performance Marketing",
//     subtitle: "Measured and maximized",
//     desc: "We run data-backed performance campaigns that are fully optimized for CPI, CPA, and ROAS goals. From install to in-app conversion, every dollar is measured and maximized.",
//   },
//   {
//     icon: Globe,
//     title: "Global Traffic Supply",
//     subtitle: "Premium traffic worldwide",
//     desc: "Access a vast network of global inventory with traffic from premium sources. We target users across geographies with the highest potential for retention and monetization.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.5 },
//   }),
// };

// export const Services = () => {
//   return (
//     <section id="services" className="py-24 px-6">
//       <div className="w-full px-6 md:px-12 xl:px-20">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">
//             01 — Services
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">
//             What we offer
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((s, i) => (
//             <motion.div
//               key={s.title}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow border border-border"
//             >
//               <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-gradient-hero group-hover:text-primary-foreground transition-colors">
//                 <s.icon
//                   size={28}
//                   className="text-accent-foreground group-hover:text-primary-foreground"
//                 />
//               </div>

//               <h3 className="text-xl font-bold font-heading mb-1">
//                 {s.title}
//               </h3>

//               <p className="text-sm text-primary font-medium mb-3">
//                 {s.subtitle}
//               </p>

//               <p className="text-muted-foreground text-sm leading-relaxed">
//                 {s.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };




import { motion } from "framer-motion";
import { Smartphone, BarChart3, Globe } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "User Acquisition Campaigns",
    subtitle: "Strategic ad placements",
    desc: "Drive targeted app installs through strategic ad placements on top-performing channels including social media, programmatic networks, and direct publisher partnerships."
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    subtitle: "Measured and maximized",
    desc: "We run data-backed campaigns optimized for CPI, CPA, and ROAS from install to in-app conversion."
  },
  {
    icon: Globe,
    title: "Global Traffic Supply",
    subtitle: "Premium traffic worldwide",
    desc: "Access global inventory with premium sources targeting high retention and monetization users."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 }
  })
};

export const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="w-full px-6 md:px-12 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-heading font-semibold text-sm tracking-widest uppercase">
            01 — Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3">
            What we offer
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition duration-300 hover:-translate-y-2"
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-gradient-hero transition-colors">
                <s.icon
                  size={28}
                  className="text-accent-foreground group-hover:text-primary-foreground"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-heading mb-1">
                {s.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-primary font-medium mb-3">
                {s.subtitle}
              </p>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
