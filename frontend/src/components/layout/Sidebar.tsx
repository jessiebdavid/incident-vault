import { NavLink } from "react-router-dom";

function Sidebar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "block rounded-lg bg-blue-600 p-3 text-white font-medium"
      : "block rounded-lg p-3 text-slate-700 hover:bg-slate-100";

  return (
    <aside className="w-64 h-screen bg-white border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          Incident Vault
        </h1>
      </div>

      <nav className="space-y-2 px-4">
        <NavLink to="/vault" end className={navLinkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/vault/records" className={navLinkClass}>
          Records
        </NavLink>

        <NavLink to="/vault/evidence" className={navLinkClass}>
          Evidence
        </NavLink>

        <NavLink to="/vault/reports" className={navLinkClass}>
          Reports
        </NavLink>

        <NavLink to="/vault/profile" className={navLinkClass}>
          Profile
        </NavLink>

        <NavLink to="/vault/settings" className={navLinkClass}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;