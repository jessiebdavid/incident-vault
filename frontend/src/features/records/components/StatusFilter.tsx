type StatusFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
    >
      <option value="All">All</option>
      <option value="Open">Open</option>
      <option value="In Progress">In Progress</option>
      <option value="Closed">Closed</option>
    </select>
  );
}

export default StatusFilter;