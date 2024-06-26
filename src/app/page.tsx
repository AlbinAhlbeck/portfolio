import Hero from "@/components/ui/hero";
import Project from "@/components/project";
import projectsData from "@/data/projects.json";
import ProgressBar from "@/components/progressbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full text-sm lg:flex">
        <Hero role="Fullstack developer, with expertise in backend"
          description="I&apos;m a mid-level developer who is growing my skillset quickly due to having a strong passion for what I'm doing. I enjoy tinkering with projects in my freetime and enjoy the limitless things there are to learn.">
          Hi! I&apos;m Albin
        </Hero>
      </div>
      <h2 className="mt-8 font-bold text-lg">About me</h2>
      <div className="max-w-2xl mt-8">
        I help projects succeed by being fully committed to what we are building.
        I challenge how we are building things and why, always striving for simple solutions to complex problems. I have discovered that I'm drawn to the visual and user experience side of development and is very interested in growing on frontend side.
      </div>
      <h2 className="my-8 font-bold text-lg">Projects</h2>
      <div className="text-sm items-center flex flex-wrap gap-12 mx-auto justify-center">
        {projectsData.map((project, index) => (
          <Project key={index} link={project.link} title={project.title} topInfo={project.topInfo} badges={project.badges}>
            {project.description}
          </Project>
        ))}
      </div>
      <h2 className="mt-12 font-bold text-lg">Skills</h2>
      <span className="mb-12 mt-2">Click on the skill to read more</span>
      <div className="flex flex-wrap gap-24 justify-center">
        <div>
          <h3 className="mb-8 flex">Backend</h3>
          <ProgressBar description="I have around 2 years of experience in .NET and have worked with it in all my projects at Tietoevry" label=".NET" progress={80} />
          <ProgressBar description="C# is my strongest language and it is the language of .NET so I also have 2 years experience in it. Have some hobby experience from tinkering with Unity." label="C#" progress={80} />
          <ProgressBar description="Java is the language i studied in university. Fun fact: Named my cat Java for this reason. I have only educational experience in Java. But it is very similar to C# so the skills translates well." label="Java" progress={60} />
          <ProgressBar description="I use MS SQL often in my work to solve bugs. I usually use ORM like Entity Framework to design tables using a code first approach" label="MS SQL" progress={70} />
        </div>
        <div>
          <h3 className="mb-8">Frontend</h3>
          <ProgressBar description="Vue.js is my strongest frontend javascript framework. I have experience in using it together with Vuex for state managment. Also have experience working with vue-i18n for localization" label="Vue.js" progress={80} />
          <ProgressBar description="I learned React.js together with Next.js and I really like it and would like to use it more." label="React.js" progress={60} />
          <ProgressBar description="I have used Next.js in a professional setting and did not have many issues with it due to it being very powerful and easy to use for routing etc." label="Next.js" progress={60} />
          <ProgressBar description="I'm creative person so I like to make things look pretty so HTML and CSS have always been very fun for me. I have not had any issues with fullfilling a design given to me from a UX/UI designer." label="HTML & CSS" progress={70} />
        </div>
        <div>
          <h3 className="mb-8">Tools and process</h3>
          <ProgressBar description="Azure or cloud engineering in general is something I want to grow in. I have set up several Azure Functions, used CI/CD pipelines to deliver features from dev -> production" label="Azure" progress={60} />
          <ProgressBar description="I'm very familiar with working with software like Jira and Miro. I have received feedback that I'm very good at updating status to project manager and involving the customer regarding requirements etc." label="Jira" progress={80} />
          <ProgressBar description="As someone who likes to move quickly I like the agile process and is very used to working with it. The agile manifesto resonates with my own view on problem solving." label="Agile" progress={85} />
          <ProgressBar description="I'm used to working with Github to colaborate with other developers" label="Github" progress={80} />
        </div>
      </div>
    </div>
  );
}
