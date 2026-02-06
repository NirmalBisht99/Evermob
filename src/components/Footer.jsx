export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-secondary text-secondary-foreground border-t border-secondary-foreground/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div>
            <a href="#home" className="flex items-center gap-1">
              <span className="text-2xl font-bold font-heading text-primary">
                Ever
              </span>
              <span className="text-2xl font-bold font-heading text-secondary-foreground">
                Mob
              </span>
            </a>

            <p className="text-sm text-secondary-foreground/60 mt-2">
              Providing Powerups for your business
            </p>
          </div>

          <p className="text-sm text-secondary-foreground/60">
            Copyright © 2026 evermob.com
          </p>

        </div>
      </div>
    </footer>
  );
};