
import { Motion } from "@/components/Motion";

interface SkillCardProps {
  title: string;
  items: string[];
  delay?: number;
}

export const SkillCard = ({ title, items, delay = 0 }: SkillCardProps) => {
  return (
    <Motion delay={delay}>
      <div className="p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300">
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-secondary rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Motion>
  );
};
