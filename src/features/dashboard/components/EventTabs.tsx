import { cn } from "@/utils/lib/cn";

type Tab = "upcoming" | "ongoing" | "past";

interface Props {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const tabs: Tab[] = ["upcoming", "ongoing", "past"];

const EventTabs = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex gap-2 border-b border-BrandOutline">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "px-4 py-2 text-sm font-medium capitalize",
            activeTab === tab
              ? "border-b-2 border-BrandPrimary text-BrandPrimary"
              : "text-BrandGray600",
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default EventTabs;
