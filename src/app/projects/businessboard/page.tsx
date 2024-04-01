import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-gray-100 pt-12 font-mono">
      <div className="flex flex-col items-center min-w-fit">
        <h1 className="text-2xl mb-8">Businessboard</h1>
        <p className="mx-12 mb-8 max-w-4xl">The customer of this project was a startup with two founders and they sprints lined up one after another and I enjoyed this quick pace. I joined the project a few years later after it had first started and it was challenging to learn due to tech debt. But in some way I enjoyed being apart of not so pristine project as I gave me a fun challenge to make it better.</p>
        <Accordion className="bg-ring w-10/12" type="single" collapsible>
          <AccordionItem value="team-role">
            <AccordionTrigger>Team and Role</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>- Fullstack Developer (Me)</li>
                <li>- Another Fullstack Developer</li>
                <li>- UX Developer</li>
                <li>- Project Manager</li>
                <li>- Other temporary members on ocassion</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="my-contributions">
            <AccordionTrigger>My Contributions</AccordionTrigger>
            <AccordionContent>
              <p>
                Contributed by driving change to improving the codebase and software processes.
                The project had no QA team nor tests so there was a lot of things that needed to improve. But time is money.
              </p>
              <p>
                So I prioritized to refactor the areas of the application which had most recurring errors.
              </p>
              <Accordion className="mt-4 mx-8" type="single" collapsible>
                <AccordionItem value="nordic-integration">
                  <AccordionTrigger>Nordic Integration</AccordionTrigger>
                  <AccordionContent>
                    <p>I was responsible for an large addition to the solution which was to enable integration of the GolfBox system.
                    </p>
                    <ul className="mt-6 flex flex-col gap-4">
                      <li>- Transformed data to follow a universal format so the two different systems would be treated the same</li>
                      <li>- Added localization to the whole application, suggested use of LLM instead of translation agency to save money.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="sie-imports">
                  <AccordionTrigger>SIE Imports</AccordionTrigger>
                  <AccordionContent>
                    <p>Worked alot of imports of SIE (financial file format with transactions etc). Always thinking about optimizing the code as the files could be very large.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="azure-costs">
                  <AccordionTrigger>Optimized cost and speed in database</AccordionTrigger>
                  <AccordionContent>
                    <p>In Azure I noticed we had a large database. Found a way to compress data by not saving every row per day (the day information was redundant). Changed so it saved every distinct type per month instead, saved a very large amount of space, and make the application faster</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="feedback">
            <AccordionTrigger>What my team thought of me</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-4">
                <li>- Passionate and driven</li>
                <li>- Learns quickly, asks good questions</li>
                <li>- Radiates more seniortity than expected of someone with my experience</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
