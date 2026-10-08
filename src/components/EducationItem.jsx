function EducationItem({ year, institution, degree, description }) {
  return (
    <li className="relative border-l-2 border-neutral-300 pb-10 pl-8 last:pb-0 list-none">

      <span className="absolute -left-[9px] top-1 z-10 h-4 w-4 rounded-full border-2 border-neutral-900 bg-white"></span>

      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {year}
      </p>

      <div className="mt-2 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-md ">
        <h3 className="font-semibold">
          {degree}
        </h3>

        <p className="text-sm text-neutral-500">
          {institution}
        </p>

        <p className="mt-2 text-sm text-neutral-600">
          {description}
        </p>
      </div>

    </li>
  );
}

export default EducationItem;