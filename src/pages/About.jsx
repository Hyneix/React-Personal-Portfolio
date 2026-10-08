import SectionTitle from "../components/SectionTitle";
import InfoCard from "../components/InfoCard";
import ServiceCard from "../components/ServiceCard";
import { profile } from "../data/data";

function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 lg:py-16">

      <SectionTitle label="About" title="About Me" />

      <div className="grid gap-8 md:grid-cols-2">

        <p className="leading-relaxed text-neutral-600">
          I am a frontend developer in training who enjoys creating clean,
          responsive websites. I am learning React and Tailwind CSS and
          building small projects to improve my skills.
        </p>

        <div className="space-y-3">
          <InfoCard label="Age" value={profile.age} />
          <InfoCard label="Residence" value={profile.location} />
          <InfoCard label="Address" value={profile.address} />
          <InfoCard label="E-mail" value={profile.email} />
          <InfoCard label="Phone" value={profile.phone} />
        </div>

      </div>

      <h3 className="mb-6 mt-16 text-2xl font-bold">
        What I Do
      </h3>

      <div className="grid gap-6 sm:grid-cols-2">

        <ServiceCard
          icon="shop"
          title="E-commerce"
          description="Product pages, carts and checkout screens built with React and Tailwind CSS."
        />

        <ServiceCard
          icon="phone"
          title="Responsive Design"
          description="Creating websites that work well on mobile, tablet and desktop screens."
        />

        <ServiceCard
          icon="code"
          title="Frontend Development"
          description="Building clean and interactive websites using HTML, CSS, JavaScript and React."
        />

        <ServiceCard
          icon="github"
          title="Version Control"
          description="Using Git and GitHub to manage, track and organise projects."
        />

      </div>
    </section>
  );
}

export default About;