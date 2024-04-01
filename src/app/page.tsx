import Hero from "../components/hero";
import Project from "../components/project";
import projectsData from "../data/projects.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 font-mono">
      <div className="flex flex-col items-center p-8 lg:p-24 text-gray-100">
        <div className="w-full text-sm lg:flex">
          <Hero role="Fullstack developer, with expertise in backend"
            description="I'm a mid-level developer who is growing my skillset quickly due to having a strong passion for what I am doing. I enjoy tinkering with projects in my freetime and enjoy the limitless things there are to learn.">
            Hi! I'm Albin
          </Hero>
        </div>
        <h2 className="mt-8 font-bold text-lg">About me</h2>
        <div className="max-w-xl mt-8">
          I help projects succeed by being fully committed to what we are building.
          I challenge how we are building things and why, always striving for simple solutions to complex problems.
        </div>
        <h2 className="my-8 font-bold text-lg">Projects</h2>
        <div className="font-mono text-sm items-center flex flex-wrap gap-12 mx-auto justify-center">
          {projectsData.map((project, index) => (
            <Project key={index} link={project.link} title={project.title} topInfo={project.topInfo} badges={project.badges}>
              {project.description}
            </Project>
          ))}
        </div>
      </div>
    </main>
  );
}
