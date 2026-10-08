import SectionTitle from "../components/SectionTitle";
import EducationItem from "../components/EducationItem";
import { education } from "../data/data";

function Education() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
      <SectionTitle label="Education" title="My Education" />

      <div className="ml-2">
        <EducationItem
          year={education[0].year}
          institution={education[0].institution}
          degree={education[0].degree}
          description={education[0].description}
        />

        <EducationItem
          year={education[1].year}
          institution={education[1].institution}
          degree={education[1].degree}
          description={education[1].description}
        />

        <EducationItem
          year={education[2].year}
          institution={education[2].institution}
          degree={education[2].degree}
          description={education[2].description}
        />
      </div>
    </section>
  );
}

export default Education;