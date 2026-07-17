type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-lg shadow-2xl border border-white/20 p-8">
      {children}
    </div>
  );
}

export default Card;