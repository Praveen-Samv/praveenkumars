
interface SectionTitleProps {
  subtext?: string;
  children: React.ReactNode;
}

export const SectionTitle = ({ subtext, children }: SectionTitleProps) => {
  return (
    <div className="mb-12 text-center">
      {subtext && (
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full">
          {subtext}
        </span>
      )}
      <h2 className="text-4xl font-bold tracking-tight">{children}</h2>
    </div>
  );
};
