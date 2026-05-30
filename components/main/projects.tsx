import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="px-6 py-20 text-center">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-sky-400">
          Services Fruition Innovix Offers
        </h1>
        <p className="mx-auto mt-5 max-w-[760px] text-gray-300">
          E-commerce support, website development, marketing, design, video,
          and photography services for brands building stronger online channels.
        </p>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-6 lg:px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
