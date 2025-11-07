import type { JSX } from "react";

interface CardHeaderProps {
  title?: string;
  children?: string | JSX.Element;
  count?: number | undefined;
}

const CardHeader = (props: CardHeaderProps) => {
  const { title, children, count } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-white p-5 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <p className="w-10 h-10 flex justify-center items-center bg-slate-200 rounded-full text-primary">
        {children}
      </p>
      <h3 className="text-2xl font-extrabold">{count || 0}</h3>
      <p className="text-primary">{title}</p>
    </div>
  );
};

export default CardHeader;
