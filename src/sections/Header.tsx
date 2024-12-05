import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed top-3 w-full">
      <div>LOGO</div>
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projectos
        </a>
        <a href="#" className="nav-item">
          Sobre
        </a>
        <a
          href="#"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contato
        </a>
      </nav>
      <div className="flex">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
