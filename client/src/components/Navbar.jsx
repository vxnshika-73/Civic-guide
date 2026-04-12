const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-slate-900 border-b border-slate-800">
      <h1 className="text-2xl font-bold text-cyan-400">
        CivicGuide AI
      </h1>

      <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;