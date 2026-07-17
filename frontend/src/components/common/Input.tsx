type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

function Input({
  label,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
      />
    </div>
  );
}

export default Input;