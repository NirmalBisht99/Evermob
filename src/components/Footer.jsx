export const Footer = () => {
  return (
    <footer className="py-6 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
                   
          {/* Brand Section */}
          <div>
            <a href="#hero" className="flex items-center gap-1 group mb-3">
              <span className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition">
                Ever
              </span>
              <span className="text-2xl font-bold text-orange-400 group-hover:text-orange-300 transition">
                Mob
              </span>
            </a>
             
            <p className="text-sm text-slate-400">
              Providing Powerups for your business
            </p>
          </div>
                               
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
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