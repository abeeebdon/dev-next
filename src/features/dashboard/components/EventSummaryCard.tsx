import { cn } from "@/utils/lib/cn";
import { ReactNode } from "react";

interface Props {
  title: string;
  count: number;
  icon: ReactNode;
  className?: string;
}

const EventSummaryCard = ({ title, count, icon, className }: Props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-xl bg-white p-5 py-6 shadow-sm border border-pink-soft",
        className,
      )}
    >
      <div className="rounded-lg bg-BrandBg p-3">{icon}</div>
      <div>
        <p className="text-sm text-BrandGray600">{title}</p>
        <h3 className="text-2xl font-semibold text-BrandGray900">{count}</h3>
      </div>
    </div>
  );
};

export default EventSummaryCard;
