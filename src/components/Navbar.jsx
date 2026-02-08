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
          ${isScrolled ? "py-2 bg-white/95 backdrop-blur-md shadow-md" : "py-4 bg-white/80 backdrop-blur-sm"}
        `}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="#hero"
            className={`
              font-extrabold tracking-tight
              transition-all duration-300
              hover:scale-105
              ${isScrolled ? "scale-90" : "scale-100"}
            `}
          >
            <span className="text-3xl md:text-4xl leading-none">
              <span className="text-blue-600">Ever</span>
              <span className="text-orange-500">Mob</span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-slate-700 font-medium
                  transition-all duration-300
                  hover:text-indigo-600
                  hover:scale-110
                  relative
                  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                  after:bg-gradient-to-r after:from-indigo-500 after:to-cyan-500
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition"
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
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-lg transition"
              aria-label="Close menu"
            >
              <X size={28} className="text-slate-900" />
            </button>

            {/* LOGO in Mobile Menu */}
            <div className="absolute top-6 left-6">
              <span className="text-2xl font-bold">
                <span className="text-blue-600">Ever</span>
                <span className="text-orange-500">Mob</span>
              </span>
            </div>

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
                    text-slate-700 font-semibold
                    transition-all duration-300
                    hover:text-indigo-600
                    hover:scale-110
                    text-center
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