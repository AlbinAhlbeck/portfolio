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
          <h1 className="text-2xl mb-8">Vellinge</h1>
          <p className="mx-8">This project had many external integrations as well a in-house custom form tools that I worked with. It used .NET MVC Pages so I had the chance to work a lot with HTML. This is what later made me want to dive deeper into frontend development</p>
          <Accordion className="w-10/12" type="single" collapsible>
            <AccordionItem value="team-role">
              <AccordionTrigger>Team and Role</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>Backend developer (Me)</li>
                  <li>Another backend developer (My mentor)</li>
                  <li>Two frontend developers</li>
                  <li>Project manager</li>
                  <li>Project owner (external)</li>
                  <li>UX Developer</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="my-contributions">
              <AccordionTrigger>My Contributions</AccordionTrigger>
              <AccordionContent>
                <p>
                 Created CMS components that were flexible and robust and easy to use for web editors.
                </p>
                <p>
                  Worked with external APIs to fetch data and convert it into CMS components.
                </p>
  
                {/* Sub-Accordion for Specific Contributions */}
                <Accordion className="mt-4 mx-8" type="single" collapsible>
                  <AccordionItem value="iot">
                    <AccordionTrigger>IoT</AccordionTrigger>
                    <AccordionContent>
                      <p>Due to API changes I got the chance to work with IoT and reading sensor data</p>
                      <p>Introduced functionality that reads available parking space by reading from sensors and displays it on the site</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="apis">
                    <AccordionTrigger>Working with APIs</AccordionTrigger>
                    <AccordionContent>
                      <p>Rebuilt the waste and water system. The user could in a visually pleasing manner view water consumption. The user could also see history about water/waste and see next waste pickup.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="feedback">
              <AccordionTrigger>What my team thought of me</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-4">
                  <li>* Good consulting skills.</li>
                  <li>* Learns quickly and very hungry for knowledge.</li>
                  <li>* Good communication, easy to work with.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    );
  }
  