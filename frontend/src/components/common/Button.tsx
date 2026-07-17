type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

function Button({
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 hover:scale-[1.02]"
    >
      {children}
    </button>
  );
}

export default Button;