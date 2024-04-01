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
          <h1 className="text-2xl mb-8">Cooperation Southwestern Skåne</h1>
          <p className="mx-8 max-w-4xl">This is the project where I learned Next.js and React.js. I had not previously worked with these frameworks. But me and my manager were confident it would not be a problem. We delivered great quality on a tight deadline and the customer was delighted.</p>
          <Accordion className="w-10/12" type="single" collapsible>
            <AccordionItem value="team-role">
              <AccordionTrigger>Team and Role</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>- Frontend developer (Me)</li>
                  <li>- Another frontend developer</li>
                  <li>- Two senior developers acting as advisors when needed (as we were junior developers)</li>
                  <li>- Project manager</li>
                  <li>- Product owner (external)</li>
                  <li>- UX Developer</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="my-contributions">
              <AccordionTrigger>My Contributions</AccordionTrigger>
              <AccordionContent>
                <p>
                 As I had a background as backend developer I lead the design of the CMS component structure.
                </p>
                <p>
                  Created easy to use components to give freedom to web editors
                </p>
                <Accordion className="mt-4 mx-8" type="single" collapsible>
                  <AccordionItem value="iot">
                    <AccordionTrigger>Strapi</AccordionTrigger>
                    <AccordionContent>
                      <p>Set up the whole Strapi CMS architecture</p>
                      <p>Built a chart builder on top of Strapi CMS using the power of Chart.js</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="apis">
                    <AccordionTrigger>Mobile first</AccordionTrigger>
                    <AccordionContent>
                      <p>Worked closely with UX designer to create mobile first layouts, using the built-in responsiveness of Tailwind.css</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="feedback">
              <AccordionTrigger>What my team thought of me</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-4">
                  <li>- Delivered features quickly.</li>
                  <li>- Fun to work with.</li>
                  <li>- Flexible with customer requirements.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    );
  }
  