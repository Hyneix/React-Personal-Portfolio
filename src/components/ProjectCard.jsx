function ProjectCard({
  title,
  description,
  tech1,
  tech2,
  link,
  github,
}) {
  return (
    <article className="rounded-lg border border-neutral-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md ">

      <div className="flex h-40 items-center justify-center bg-neutral-200 text-5xl font-bold text-neutral-400">
        {title[0]}
      </div>

      <div className="p-5">

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-neutral-600">
          {description}
        </p>

        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
            {tech1}
          </span>

          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
            {tech2}
          </span>
        </div>

        <div className="mt-4 flex gap-3">
          <a
            href={link}
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white hover:-translate-y-1 hover:shadow-md"
          >
            Live Demo
          </a>

          <a
            href={github}
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm hover:-translate-y-1 hover:shadow-md"
          >
            GitHub
          </a>
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;