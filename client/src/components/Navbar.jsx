const Navbar = ({ scrollToDemo }) => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 px-8 py-5 flex justify-between items-center">

      <h1 className="text-3xl font-bold text-cyan-400">
        CivicGuide AI
      </h1>

      <button
        onClick={scrollToDemo}
        className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-semibold"
      >
        Get Started
      </button>

    </nav>
  );
};

export default Navbar;