import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">

      <Link
        to="/"
        className="text-2xl font-bold text-blue-600"
      >
        Incident Vault
      </Link>

      <div className="flex gap-4">

        <Link
          to="/login"
          className="font-medium text-slate-700 hover:text-blue-600"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;