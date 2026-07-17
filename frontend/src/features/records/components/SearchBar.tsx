type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search records..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-80 rounded-lg border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
    />
  );
}

export default SearchBar;