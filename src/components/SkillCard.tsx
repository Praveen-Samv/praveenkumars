
import { Motion } from "@/components/Motion";

interface SkillCardProps {
  title: string;
  items: string[];
  delay?: number;
}

export const SkillCard = ({ title, items, delay = 0 }: SkillCardProps) => {
  return (
    <Motion delay={delay}>
      <div className="p-6 glass-card rounded-xl hover-lift">
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <span key={index} className="skill-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Motion>
  );
};
