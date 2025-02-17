
import { Motion } from "@/components/Motion";

interface ProjectCardProps {
  title: string;
  duration: string;
  platform: string;
  description: string;
  responsibilities: string[];
  delay?: number;
}

export const ProjectCard = ({
  title,
  duration,
  platform,
  description,
  responsibilities,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <Motion delay={delay}>
      <div className="p-6 glass-card rounded-xl hover-lift">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">
                {duration}
              </span>
              <span className="skill-tag">
                {platform}
              </span>
            </div>
          </div>
          <p className="text-accent">{description}</p>
          <div>
            <h4 className="mb-2 font-medium">Key Responsibilities:</h4>
            <ul className="space-y-2">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 bg-primary rounded-full" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Motion>
  );
};
