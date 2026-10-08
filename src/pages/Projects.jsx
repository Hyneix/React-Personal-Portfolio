import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";

function Projects() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 lg:py-16">

      <SectionTitle
        label="Projects"
        title="My Projects"
        description="A selection of things I have built."
      />

      <div className="grid gap-6 sm:grid-cols-2">

        <ProjectCard title={projects[0].title} description={projects[0].description} tech1={projects[0].tech1} tech2={projects[0].tech2} link={projects[0].link} github={projects[0].github} />

        <ProjectCard title={projects[1].title} description={projects[1].description} tech1={projects[1].tech1} tech2={projects[1].tech2} link={projects[1].link} github={projects[1].github} />
 
      </div>

    </section>
  );
}

export default Projects;