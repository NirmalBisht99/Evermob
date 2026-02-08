import { Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <a href="#hero" className="flex items-center gap-1 group mb-4">
              <span className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition">
                Ever
              </span>
              <span className="text-2xl font-bold text-orange-400 group-hover:text-orange-300 transition">
                Mob
              </span>
            </a>

            <p className="text-sm text-slate-400 mb-4">
              Providing Powerups for your business
            </p>

            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/company/evermob/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-500 flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white transition" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nirmalbisht99/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white transition" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#hero" },
                { name: "Services", href: "#services" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-indigo-400 transition text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="mailto:support@evermob.com" className="hover:text-indigo-400 transition">
                  support@evermob.com
                </a>
              </li>
              <li>
                <a href="tel:+15196978494" className="hover:text-indigo-400 transition">
                  +1 519 697-8494
                </a>
              </li>
              <li className="leading-relaxed">
                Adelaide St N, London,<br />ON N6B 3J5, Canada
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            Copyright © 2026 evermob.com. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};