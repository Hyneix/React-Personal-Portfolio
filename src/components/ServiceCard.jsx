import {
  Shop,
  Phone,
  Code,
  Github
} from "react-bootstrap-icons";

function ServiceCard({ icon, title, description }) {
  let Icon;

  if (icon === "shop") {
    Icon = Shop;
  } else if (icon === "phone") {
    Icon = Phone;
  } else if (icon === "code") {
    Icon = Code;
  } else if (icon === "github") {
    Icon = Github;
  }

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md">
      <Icon size={40} className="text-neutral-500" />

      <h3 className="mt-3 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-sm leading-relaxed text-neutral-600">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;