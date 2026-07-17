import RecordRow from "./RecordRow";

type Record = {
  id: number;
  title: string;
  category: string;
  status: string;
  date: string;
};

type RecordTableProps = {
  records: Record[];
};

function RecordTable({ records }: RecordTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record) => (
            <RecordRow key={record.id} record={record} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecordTable;