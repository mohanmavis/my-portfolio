import { Briefcase, Code, User } from "lucide-react";
import { cn } from "../lib/utils";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl"></div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About
        <span className="text-primary"> Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
            Turning human insights into better technology
          </h3>
          <p className="text-muted-foreground">
            I’m a Human–Technology Interaction specialist who studies how people
            engage with technology and turns those insights into meaningful
            digital experiences.
          </p>
          <p className="text-muted-foreground">
            I specialize in translating complex, real-world context into
            resilient web applications and integrated brand narratives, always
            seeking to design the next meaningful digital artifact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              {" "}
              Get In Touch
            </a>
            <a
              href=""
              className={cn(
                "px-6 py-2 rounded-full border border-primary text-primary",
                "hover:bg-primary/10 transition-colors duration-300 "
              )}
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg "> Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with modern
                  frameworks
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg "> UI/UX Design</h4>
                <p className="text-muted-foreground">
                  I design digital tools that require the least effort to
                  interact. I focus on making your experience quick, efficient,
                  and frustration-free.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg "> Project Management</h4>
                <p className="text-muted-foreground">
                  I check market trends and how users act. This makes sure my
                  projects are useful and make sense for the real world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
