function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-xl font-semibold text-slate-800">
          Dashboard
        </h2>

        <p className="text-sm text-slate-500">
          Welcome back!
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full bg-slate-100 px-4 py-2 hover:bg-slate-200 transition">
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            J
          </div>

          <span className="font-medium">
            Jessie
          </span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;