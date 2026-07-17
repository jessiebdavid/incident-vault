type StatCardProps = {
  title: string;
  value: number;
};

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
      <h3 className="text-sm font-medium text-slate-500">
        {title}
      </h3>

      <p className="mt-3 text-3xl font-bold text-slate-800">
        {value}
      </p>
    </div>
  );
}

export default StatCard;