import Project from "@/components/project";
import projectsData from "@/data/projects.json"

export default function Projects() {
  return (
      <div className="flex flex-col items-center p-24 mb-89 min-w-fit">
      <div className="font-mono text-sm items-center flex flex-wrap gap-12 mx-auto justify-center">
          {projectsData.map((project, index) => (
            <Project key={index} link={project.link} title={project.title} topInfo={project.topInfo} badges={project.badges}>
              {project.description}
            </Project>
          ))}
        </div>
      </div>
  );
}
