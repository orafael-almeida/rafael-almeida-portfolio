import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed top-3 w-full px-4 md:px-16 lg:px-32">
      <div>LOGO</div>
      <nav className="flex gap-1 p-0.5 border rounded-full border-gray-900/60 bg-gray-200/40 dark:border-white/15 dark:bg-white/10 backdrop-blur">
        <a href="#" className="nav-item text-gray-900 dark:text-slate-200">
          Home
        </a>
        <a href="#" className="nav-item text-gray-900 dark:text-slate-200">
          Projectos
        </a>
        <a href="#" className="nav-item text-gray-900 dark:text-slate-200">
          Sobre
        </a>
        <a href="#" className="nav-item text-gray-900 dark:text-slate-200">
          Contato
        </a>
      </nav>
      <div className="flex">
        <ThemeToggle />
        <div
          className="w-6 h-6 ml-2 rounded-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.countryflags.com/thumbs/brazil/flag-3d-round-250.png')",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
