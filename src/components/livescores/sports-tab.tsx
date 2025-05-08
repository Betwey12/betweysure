import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { TSportsTab } from "./match-results";

interface SportstabsProps {
  activeTab: TSportsTab;
  setActiveTab: React.Dispatch<React.SetStateAction<TSportsTab>>;
}

export default function Sportstabs({
  activeTab,
  setActiveTab,
}: SportstabsProps) {
  const tabs: TSportsTab[] = [
    "football",
    "basketball",
    "handball",
    "baseball",
    "rugby",
    "hockey",
  ];
  return (
    <div className="grid grid-cols-2 lg:flex items-center gap-2 mt-6 px-4 xl:px-20 md:px-10">
      {tabs.map((tab) => (
        <Button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "py-2 px-4 rounded-lg transition-colors bg-gray-one text-white",
            {
              "bg-cyan text-white": activeTab === tab,
            }
          )}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
}
