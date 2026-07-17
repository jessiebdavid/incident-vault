import PageHeader from "../../components/common/PageHeader";
import StatCard from "../../components/common/StatCard";

function Dashboard() {
  const stats = [
    {
      title: "Total Records",
      value: 24,
    },
    {
      title: "Open Cases",
      value: 6,
    },
    {
      title: "Evidence Files",
      value: 58,
    },
    {
      title: "Reports Generated",
      value: 12,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader
        title="Dashboard"
        subtitle="Here's an overview of your Incident Vault."
      />

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </section>

      {/* Recent Records */}
      <section className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-800">
            Recent Records
          </h2>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
            + New Record
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition">
            Workplace Harassment
          </div>

          <div className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition">
            Cyberbullying Incident
          </div>

          <div className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition">
            Public Safety Complaint
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;