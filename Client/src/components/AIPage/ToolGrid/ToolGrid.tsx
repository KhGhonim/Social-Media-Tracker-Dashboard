import { ToolGridProps } from "../../../types/types";
import { AICard } from "../AICard/AICard";


export default function ToolGrid({ tools, onSelect }: ToolGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <AICard
          key={tool.id}
          title={tool.title}
          description={tool.description}
          icon={<tool.icon size={24} />}
          onClick={() => onSelect(tool.id)}
        />
      ))}
    </div>
  );
}
