import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          Incident Vault
        </h1>
      </div>

      <nav className="px-4 space-y-2">
        <NavLink to="/vault" className="block rounded-lg p-3 hover:bg-slate-100">
          Dashboard
        </NavLink>

        <NavLink to="/vault/records" className="block rounded-lg p-3 hover:bg-slate-100">
          Records
        </NavLink>

        <NavLink to="/vault/evidence" className="block rounded-lg p-3 hover:bg-slate-100">
          Evidence
        </NavLink>

        <NavLink to="/vault/reports" className="block rounded-lg p-3 hover:bg-slate-100">
          Reports
        </NavLink>

        <NavLink to="/vault/profile" className="block rounded-lg p-3 hover:bg-slate-100">
          Profile
        </NavLink>

        <NavLink to="/vault/settings" className="block rounded-lg p-3 hover:bg-slate-100">
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;