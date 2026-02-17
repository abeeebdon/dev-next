import { cn } from "@/utils/lib/cn";
import { ReactNode } from "react";

interface Props {
  title: string;
  count: number | string;
  icon: ReactNode;
  className?: string;
  bottomComp?: ReactNode;
}

const EventSummaryCard = ({
  title,
  count,
  icon,
  className,
  bottomComp,
}: Props) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-white p-5 py-6 space-y-4 shadow-sm border border-pink-soft/50",
        className,
      )}
    >
      <div className="bg-gray-50 rounded-full w-fit p-2">{icon}</div>
      <p className="text-sm text-gray-600">{title}</p>
      <div className="flex items-end gap-1">
        <h3 className="text-2xl font-semibold text-gray-900">{count}</h3>
        {bottomComp && bottomComp}
      </div>
    </div>
  );
};

export default EventSummaryCard;
