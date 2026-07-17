import { Link } from "react-router-dom";
import { useState } from "react";

import PageHeader from "../../components/common/PageHeader";

import RecordTable from "../../features/records/components/RecordTable";
import SearchBar from "../../features/records/components/SearchBar";

import { records } from "../../features/records/data/records";

import StatusFilter from "@/features/records/components/StatusFilter";

function Records() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredRecords = records.filter((record) =>{
   const matchesSearch = record.title
    .toLowerCase()
    .includes(search.toLowerCase());
  
   const matchesStatus =
    status === "All" || record.status === status;
});

  return (
    <div className="space-y-6">
      <PageHeader
        title="Records"
        subtitle="Manage and track all incident records."
      />

     <div className="flex items-center justify-between">
       <div className="flex items-center gap-4">
        <SearchBar
         value={search}
        onChange={setSearch}
        />

        <StatusFilter
         value={status}
         onChange={setStatus}
        />
     </div>

        <Link
          to="/vault/records/new"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          + New Record
        </Link>
      </div>

      <RecordTable records={filteredRecords} />
    </div>
  );
}

export default Records;