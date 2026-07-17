import StatusBadge from "./StatusBadge";

type RecordRowProps = {
  record: {
    id: number;
    title: string;
    category: string;
    status: string;
    date: string;
  };
};

function RecordRow({ record }: RecordRowProps) {
  return (
    <tr className="border-t hover:bg-slate-50">
      <td className="p-4">{record.title}</td>
      <td className="p-4">{record.category}</td>
      <td className="p-4">
        <StatusBadge status={record.status} />
      </td>
      <td className="p-4">{record.date}</td>
    </tr>
  );
}

export default RecordRow;