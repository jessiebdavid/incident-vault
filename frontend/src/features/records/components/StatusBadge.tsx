type StatusBadgeProps = {
  status: string;
};

function StatusBadge({ status }: StatusBadgeProps) {
  let styles = "";

  switch (status) {
    case "Open":
      styles = "bg-green-100 text-green-700";
      break;

    case "In Progress":
      styles = "bg-yellow-100 text-yellow-700";
      break;

    case "Closed":
      styles = "bg-red-100 text-red-700";
      break;

    default:
      styles = "bg-slate-100 text-slate-700";
  }

  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${styles}`}>
      {status}
    </span>
  );
}

export default StatusBadge;