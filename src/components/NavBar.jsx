import { useNavigate, useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    try {
      localStorage.removeItem("isLoggedIn");
    } catch (e) {}

    navigate("/login");
  };

  const navClass = (path) => {
    const isActive = location.pathname === path;

    return `px-4 py-2 font-medium rounded-lg transition-all duration-300 border ${
      isActive
        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg border-purple-400/30"
        : "text-slate-700 hover:text-slate-900 hover:bg-black/5 border-transparent hover:border-purple-300/40"
    }`;
  };

  return (
    <nav className="bg-gradient-to-r from-white via-purple-50 to-white shadow-xl border-b border-purple-200/40">

      <div className="max-w-7xl mx-auto px-6 py-3">

        <div className="flex items-center">

          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="flex items-center space-x-4 group">

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-70 group-hover:opacity-90 transition-opacity"></div>

                <img
                  className="relative w-12 h-12 rounded-full border-2 border-purple-300/60 shadow-lg"
                  src="/logo.svg"
                  alt="LOGO"
                />
              </div>

              <h2 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent">
                StockHub
              </h2>

            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-2">

            <Link to="/" className={navClass("/")}>
              Home
            </Link>

            <Link to="/cart" className={navClass("/cart")}>
              Cart
            </Link>

            <Link to="/inventory" className={navClass("/inventory")}>
              Inventory
            </Link>

            <Link to="/sales" className={navClass("/sales")}>
              Sales
            </Link>

            <Link to="/dashboard" className={navClass("/dashboard")}>
              Dashboard
            </Link>

            <Link to="/add-product" className={navClass("/add-product")}>
              Add Product
            </Link>

          </div>

          {/* Logout */}
          <div className="flex-1 flex justify-end">

            <button
              onClick={handleLogout}
              className="px-4 py-2 text-slate-700 hover:text-slate-900 transition-all duration-300 rounded-lg hover:bg-black/5 border border-transparent hover:border-purple-300/40"
              aria-label="Logout"
            >
              <span className="inline-flex items-center gap-2">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <path d="M10 17l5-5-5-5" />
                  <path d="M15 12H3" />
                </svg>

                Logout

              </span>
            </button>

          </div>

        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>

    </nav>
  );
};

export default NavBar;