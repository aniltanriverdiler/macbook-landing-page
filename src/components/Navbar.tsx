import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* Apple Logo */}
        <img src="/logo.svg" alt="Apple Logo" />

        {/* Nav Links */}
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Search and Cart Buttons */}
        <div className="flex-center gap-3">
          <button>
            <img src="/public/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/public/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
