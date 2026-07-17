import { useState } from "react";

function RecordForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Harassment");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      title,
      category,
      description,
      status,
      date,
      location,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border bg-white p-6 shadow-sm"
    >
      {/* Title */}
      <div>
        <label className="mb-2 block font-medium">
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border p-3"
          placeholder="Enter incident title"
          required
        />
      </div>

      {/* Category */}
      <div>
        <label className="mb-2 block font-medium">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border p-3"
        >
          <option>Harassment</option>
          <option>Cyberbullying</option>
          <option>Discrimination</option>
          <option>Violence</option>
          <option>Safety</option>
          <option>Other</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block font-medium">
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-lg border p-3"
          placeholder="Describe the incident..."
        />
      </div>

      {/* Status */}
      <div>
        <label className="mb-2 block font-medium">
          Status
        </label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded-lg border p-3"
        >
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="mb-2 block font-medium">
          Incident Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Location */}
      <div>
        <label className="mb-2 block font-medium">
          Location
        </label>

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-lg border p-3"
          placeholder="Enter location"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="rounded-lg border px-5 py-2"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Save Record
        </button>
      </div>
    </form>
  );
}

export default RecordForm;