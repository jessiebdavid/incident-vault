import PageHeader from "../../components/common/PageHeader";
import RecordForm from "../../features/records/components/RecordForm";

function NewRecord() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="New Record"
        subtitle="Create a new incident record."
      />

      <RecordForm />
    </div>
  );
}

export default NewRecord;