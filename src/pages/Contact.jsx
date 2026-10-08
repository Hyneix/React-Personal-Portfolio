import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import { profile } from "../data/data";

function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12 lg:py-16 ">
      <SectionTitle
        label="Contact"
        title="Get In Touch"
        description="Have a question or a project in mind? Send me a message." />

      <div className="grid gap-8 lg:grid-cols-5 ">

        <div className="space-y-4 lg:col-span-2">

          <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm hover:-translate-y-1 hover:shadow-md">
            <p className="text-xs uppercase tracking-wide text-neutral-500 ">
              Email
            </p>
            <p className="font-medium break-words">
              {profile.email}
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm hover:-translate-y-1 hover:shadow-md">
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              Phone
            </p>
            <p className="font-medium">
              {profile.phone}
            </p>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm hover:-translate-y-1 hover:shadow-md" >
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              Location
            </p>
            <p className="font-medium">
              {profile.location}
            </p>
          </div>

          <div className="flex gap-3">
            <a href={profile.socials[0].url}
              className="rounded-md border border-neutral-300 px-4 py-2 text-sm hover:-translate-y-1 hover:shadow-md hover:bg-neutral-900 hover:text-white" >
              GitHub
            </a>

            <a href={profile.socials[1].url}
              className="rounded-md border border-neutral-300 px-4 py-2 text-sm hover:-translate-y-1 hover:shadow-md hover:bg-neutral-900 hover:text-white" >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}

export default Contact;