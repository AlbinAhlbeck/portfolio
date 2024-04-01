import Project from "../../components/project";

export default function Projects() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="flex flex-col items-center p-24 mb-89 min-w-fit">
        <div className="font-mono text-sm flex flex-wrap justify-center gap-12">
          <Project title="En titel" badges={["C#", "JavaScript"]}>Some text</Project>
          <Project title="En titel" badges={["C#", "JavaScript"]}>Some text</Project>
        </div>
        <div>
          {/* Additional content */}
        </div>
      </div>
    </main>
  );
}
