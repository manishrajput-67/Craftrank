import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
        CraftRank AI
      </h1>

      <div className="hidden md:flex gap-10 text-gray-300">
        <Link to="/">Home</Link>
        <Link to="/">Features</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">About</Link>
      </div>

      <div className="flex gap-4">
        <button className="border border-gray-700 px-5 py-2 rounded-xl">
          Login
        </button>

        <button className="bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-2 rounded-xl">
          Register
        </button>
      </div>
    </nav>
  );
}