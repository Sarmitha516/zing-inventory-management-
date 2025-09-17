import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.removeItem('isLoggedIn');
    } catch (e) {}
    navigate('/login');
  };
  return (
    <nav className="bg-gradient-to-r from-white via-purple-50 to-white shadow-xl border-b border-purple-200/40">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Title (Left) */}
          <a href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <img 
                className="relative w-12 h-12 rounded-full border-2 border-purple-300/60 shadow-lg" 
                src="/logo.svg" 
                alt="LOGO"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent">
                ZING
              </h2>
            </div>
          </a>

          {/* Navigation Links (Right) */}
          <div className="flex items-center space-x-2">
            <a 
              href="/" 
              className="group relative px-4 py-2 text-slate-700 hover:text-slate-900 transition-all duration-300 rounded-lg hover:bg-black/5 border border-transparent hover:border-purple-300/40"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
            </a>
            
            <a 
              href="/cart" 
              className="group relative px-4 py-2 text-slate-700 hover:text-slate-900 transition-all duration-300 rounded-lg hover:bg-black/5 border border-transparent hover:border-purple-300/40"
            >
              <span className="relative z-10">Cart</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
            </a>
            
            <a 
              href="/inventory" 
              className="group relative px-4 py-2 text-slate-700 hover:text-slate-900 transition-all duration-300 rounded-lg hover:bg-black/5 border border-transparent hover:border-purple-300/40"
            >
              <span className="relative z-10">Inventory</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
            </a>
            
            <a 
              href="/sales" 
              className="group relative px-4 py-2 text-slate-700 hover:text-slate-900 transition-all duration-300 rounded-lg hover:bg-black/5 border border-transparent hover:border-purple-300/40"
            >
              <span className="relative z-10">Sales</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
            </a>
            
            <a 
              href="/add-product" 
              className="group relative px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 border border-purple-400/30"
            >
              <span className="relative z-10">Add Product</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
            </a>

            <button 
              onClick={handleLogout}
              className="group relative px-4 py-2 text-slate-700 hover:text-slate-900 transition-all duration-300 rounded-lg hover:bg_black/5 hover:bg-black/5 border border-transparent hover:border-purple-300/40"
              aria-label="Logout"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <path d="M10 17l5-5-5-5"/>
                  <path d="M15 12H3"/>
                </svg>
                Logout
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
    </nav>
  );
};

export default NavBar;