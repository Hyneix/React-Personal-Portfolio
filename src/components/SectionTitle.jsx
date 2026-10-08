// Reusable heading: small label + main heading + optional description
function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-10">

      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {label}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-neutral-900">
        {title}
      </h2>

      <div className="mt-3 h-1 w-12 bg-neutral-900" />

      {description && 
      <p className="mt-4 max-w-xl text-neutral-600">
        {description}
      </p>}

    </div>
  );

}

export default SectionTitle;
