
import { Motion } from "@/components/Motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "@/components/SkillCard";
import { Github, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Hero Section */}
      <section className="container px-4 pt-32 pb-16">
        <Motion>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              Software Developer
            </span>
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              T Praveen Kumar
            </h1>
            <p className="mb-8 text-xl text-accent">
              Forward-thinking software developer with 2+ years of experience in
              JavaScript, React, and Node.js, passionate about creating elegant
              solutions to complex problems.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:praveenkumardev152@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 font-medium transition-colors rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href="https://github.com/Praveen-Samv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 font-medium transition-colors bg-white rounded-full text-foreground hover:bg-secondary"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </Motion>
      </section>

      {/* Professional Summary */}
      <section className="container px-4 py-16">
        <SectionTitle subtext="About Me">Professional Summary</SectionTitle>
        <Motion>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1 h-1 bg-primary rounded-full" />
                <span>
                  Professional programming experience in React.js, Node.js, and
                  modern frameworks
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1 h-1 bg-primary rounded-full" />
                <span>
                  Proficient in developing web applications using React.js and
                  React Router DOM
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1 h-1 bg-primary rounded-full" />
                <span>
                  Strong knowledge of JWT, cookies, and RESTful web services
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 w-1 h-1 bg-primary rounded-full" />
                <span>
                  Excellent analytical, problem-solving, and communication skills
                </span>
              </li>
            </ul>
          </div>
        </Motion>
      </section>

      {/* Skills */}
      <section className="container px-4 py-16">
        <SectionTitle subtext="Expertise">Technical Skills</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2">
          <SkillCard
            title="Languages & Frameworks"
            items={[
              "JavaScript",
              "TypeScript",
              "Python",
              "React.js",
              "Node.js",
              "Web-Sockets",
              "Kafka",
              "Supabase",
            ]}
            delay={0.1}
          />
          <SkillCard
            title="Tools & Technologies"
            items={[
              "VS Code",
              "Git",
              "MySQL",
              "PostgreSQL",
              "Express",
              "Sequelize",
              "Microservices",
              "REST APIs",
            ]}
            delay={0.2}
          />
        </div>
      </section>

      {/* Projects */}
      <section className="container px-4 py-16">
        <SectionTitle subtext="Experience">Projects</SectionTitle>
        <div className="grid gap-6">
          <ProjectCard
            title="InstaRide"
            duration="June 2024 - Nov 2024"
            platform="Microservices, JavaScript, React.js, Node.js, Express, MySQL"
            description="A comprehensive mobile application designed to facilitate the connection between drivers and riders on the InstaRide platform."
            responsibilities={[
              "Implemented REST APIs for assigned modules",
              "Developed web pages with full backend connectivity",
              "Built new modules from scratch",
              "Collaborated with a team of 6 developers",
            ]}
            delay={0.1}
          />
          <ProjectCard
            title="Corp-Astro"
            duration="Nov 2024 - Present"
            platform="Microservices, JavaScript, React.js, Supabase"
            description="A revolutionary application designed for businesses to harness astrological and numerological insights, offering various service tiers including Free, Subscription-Based, and Premium Services."
            responsibilities={[
              "Created application according to UI/UX specifications",
              "Developed web pages with complete backend integration",
              "Worked as an AI trainee agent",
              "Collaborated with UI/UX designers and clients",
            ]}
            delay={0.2}
          />
        </div>
      </section>

      {/* Contact */}
      <section className="container px-4 py-16">
        <SectionTitle subtext="Get in Touch">Contact</SectionTitle>
        <Motion>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:praveenkumardev152@gmail.com"
              className="flex items-center gap-2 text-lg hover:text-primary"
            >
              <Mail size={20} />
              praveenkumardev152@gmail.com
            </a>
            <a
              href="tel:+918142916065"
              className="flex items-center gap-2 text-lg hover:text-primary"
            >
              <Phone size={20} />
              +91 8142916065
            </a>
          </div>
        </Motion>
      </section>
    </div>
  );
};

export default Index;
