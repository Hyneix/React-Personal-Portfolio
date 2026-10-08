import { profile } from "../data/data";
import profileImage from "../assets/profile.png";
import { Linkedin, Github } from "react-bootstrap-icons";

function Sidebar() {
  return (
    <aside className="flex flex-col items-center px-6 pb-14 pt-10 text-center text-white lg:w-80 lg:shrink-0 lg:pb-6 lg:pr-16 lg:pt-16">

      <img
        src={profileImage}
        alt="Profile"
        className="h-44 w-44 rounded-full border-4 border-white/80 bg-white object-cover"
      />

      <h2 className="mt-8 text-3xl font-semibold ">{profile.name}</h2>
      <p className="mt-1 text-white/90">{profile.title}</p>

      <div className="mt-5 flex gap-5 text-lg">
        <a href={profile.socials[1].url} aria-label="LinkedIn" className="hover:opacity-70 hover:-translate-y-1 hover:shadow-md">
          <Linkedin />
        </a>
        <a href={profile.socials[0].url} aria-label="GitHub" className="hover:opacity-70 hover:-translate-y-1 hover:shadow-md ">
          <Github />
        </a>
      </div>

      <a
        href="/cv.pdf" download className="mt-10 rounded-full border-2 border-white px-8 py-2.5 text-sm font-medium transition hover:bg-white hover:text-[#04b4e0] hover:-translate-y-1 hover:shadow-md" >
        Download CV
      </a>

      <p className="mt-auto pt-10 text-xs">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </aside>
  );
}

export default Sidebar;
