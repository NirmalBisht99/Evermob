import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#WhyUs" },
  { name: "What We Do", href: "#WhatWeDo" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Navbar scroll effect */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  /* ESC to close */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-40
          transition-all duration-300
          ${isScrolled ? "py-2 bg-white/80 backdrop-blur-md shadow-md" : "py-4"}
        `}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#hero"
            className={`
              font-extrabold tracking-tight
              transition-all duration-300
              hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.35)]
              ${isScrolled ? "scale-90" : "scale-100"}
            `}
          >
            <span className="text-3xl md:text-4xl leading-none">
              <span className="text-[var(--brand-blue)]">Ever</span>
              <span className="text-[var(--brand-orange)]">Mob</span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-slate-700
                  transition-all duration-300
                  hover:text-black
                  hover:scale-110
                  hover:drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-slate-900"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden bg-white flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {/* MENU ITEMS */}
            <motion.div
              className="flex flex-col space-y-8 text-xl"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
                hidden: {},
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="
                    text-slate-700
                    transition-all duration-300
                    hover:text-black
                    hover:scale-110
                    hover:drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]
                  "
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
