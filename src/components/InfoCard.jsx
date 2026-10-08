// Props: label, value. One row of the personal info list
function InfoCard({ label, value }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-sm hover:-translate-y-1 hover:shadow-md">

      <span className="mr-2 text-sm font-semibold text-neutral-500">
        {label}
      </span>

      <span className="break-words text-neutral-800">
        {value}
      </span>

    </div>
  );
}

export default InfoCard;
