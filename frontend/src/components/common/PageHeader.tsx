type PageHeaderProps = {
  title: string;
  subtitle: string;
};

function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800">
        {title}
      </h1>

      <p className="mt-2 text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}

export default PageHeader;