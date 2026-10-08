// Props: name, level, percentage, description
function SkillCard({ name, level, percentage, description }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          {name}
        </h3>
        <span className="text-xs text-neutral-500">
          {level}
          </span>
      </div>

      <p className="mt-1 text-sm text-neutral-600">
        {description}
      </p>

      <div className="mt-4 h-2 rounded-full bg-neutral-200">
        <div className="h-2 rounded-full bg-neutral-900" style={{ width: `${percentage}%` }} />
      </div>

      <p className="mt-1 text-right text-xs text-neutral-500">
        {percentage}%
      </p>

    </div>
  );
}

export default SkillCard;
