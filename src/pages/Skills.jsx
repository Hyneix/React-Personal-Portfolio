import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/data";

function Skills() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
      <SectionTitle label="Skills" title="My Skills" description="Technologies I have learned and use in my projects." />
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((skill) => (
          <SkillCard key={skill.id} name={skill.name} level={skill.level} percentage={skill.percentage} description={skill.description} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
