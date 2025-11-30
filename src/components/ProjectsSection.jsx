import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Mindflow - AI-Powered Journaling App",
    description:
      "A clean, minimalist landing page for an AI-powered journaling app. Features a serene, focused user interface with subtle gradients and soft iconography.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Aetherial Connect - Decentralized Social Platform",
    description:
      "A platform emphasizing secure and private social connections. The design uses deep blues and interconnected nodes, symbolizing a secure, vast network structure.",
    image: "/projects/project2.png",
    tags: ["React", "Axios", "PostgreSQL", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Syntagma Analytics - Data Visualization Dashboard",
    description:
      "A sophisticated data analytics dashboard focusing on clarity and insights. Features sharp data visualizations and charts for easy business intelligence.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "Express.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl "></div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
        {" "}
        Featured
        <span className="text-primary"> Porjects </span>
      </h2>
      <p className="text-center text-muted-foreground b-12 max-w-2xl mx-auto">
        {" "}
        Here are some of my recent projects. Each project was carefully crafted
        with attention to detail, performance and user experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-fit overflow-hidden">
              {" "}
              <img
                src={project.image}
                alt="project.title"
                className=" object-cover transition-transform duration-500 group-hover:scale-110 "
              />
            </div>
            <h3 className="text-xl font-semibold my-2k">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/mohanmavis"
          className="cosmic-button w-fit flex items-center mx-auto gap-2"
          target="_blank"
        >
          Check Out My GitHub <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};
