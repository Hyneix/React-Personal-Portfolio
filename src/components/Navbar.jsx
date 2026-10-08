import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  House,
  Person,
  Tools,
  Mortarboard,
  Briefcase,
  Envelope,
  ChevronRight,
  ChevronLeft,
} from "react-bootstrap-icons";

const pages = ["/", "/about", "/skills", "/education", "/projects", "/contact"];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  let current = pages.indexOf(location.pathname);
  if (current === -1) {
    current = 0; // 
  }

  function goNext() {
    let next = current + 1;
    if (next === pages.length) {
      next = 0;
    }
    navigate(pages[next]);
  }

  function goPrevious() {
    let previous = current - 1;
    if (previous < 0) {
      previous = pages.length - 1;
    }
    navigate(pages[previous]);
  }

  function iconClass({ isActive }) {
    const base =
      "group relative flex h-10 w-10 items-center justify-center rounded-full text-2xl transition ";

    if (isActive) {
      return base + "text-[#04b4e0]";
    }
    return base + "text-neutral-400 hover:text-neutral-700";
  }


  const tooltipClass =
    "pointer-events-none absolute bottom-full mb-3 whitespace-nowrap rounded-md bg-neutral-900 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 lg:bottom-auto lg:right-full lg:mb-0 lg:mr-4";

  return (
    <aside className="fixed inset-x-4 bottom-4 z-20 lg:static lg:flex lg:w-[70px] lg:shrink-0 lg:flex-col lg:justify-between">

      {/* bottom bar on mobile, vertical pill on desktop */}
      <nav className="flex justify-around rounded-full bg-white p-2 shadow-xl lg:flex-col lg:items-center lg:gap-3 lg:py-6">

        <NavLink to="/" end aria-label="Home" className={iconClass}>
          <House />
          <span className={tooltipClass}>Home</span>
        </NavLink>

        <NavLink to="/about" aria-label="About" className={iconClass}>
          <Person />
          <span className={tooltipClass}>About</span>
        </NavLink>

        <NavLink to="/skills" aria-label="Skills" className={iconClass}>
          <Tools />
          <span className={tooltipClass}>Skills</span>
        </NavLink>

        <NavLink to="/education" aria-label="Education" className={iconClass}>
          <Mortarboard />
          <span className={tooltipClass}>Education</span>
        </NavLink>

        <NavLink to="/projects" aria-label="Projects" className={iconClass}>
          <Briefcase />
          <span className={tooltipClass}>Projects</span>
        </NavLink>

        <NavLink to="/contact" aria-label="Contact" className={iconClass}>
          <Envelope />
          <span className={tooltipClass}>Contact</span>
        </NavLink>

      </nav>

      <div className="hidden w-[60px] flex-col items-center gap-3 self-start rounded-full bg-white py-4 shadow-xl lg:flex">
        <button
          onClick={goNext}
          aria-label="Next page"
          className="text-xl text-neutral-400 hover:text-[#04b4e0]"
        >
          <ChevronRight />
        </button>

        <button
          onClick={goPrevious}
          aria-label="Previous page"
          className="text-xl text-neutral-400 hover:text-[#04b4e0]"
        >
          <ChevronLeft />
        </button>
      </div>
    </aside>
  );
}

export default Navbar;