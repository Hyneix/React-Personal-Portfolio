import { useNavigate } from "react-router-dom";
import { profile } from "../data/data";
import profileImage from "../assets/profile.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-start gap-6">

      <img src={profileImage} alt="Profile" className="h-35 w-35 rounded-full object-cover " />

      <p className="text-neutral-500">
        Hello, I'm
      </p>

      <h1 className="text-4xl font-bold sm:text-5xl">
        {profile.name}
      </h1>

      <p className="text-xl text-neutral-700">
        {profile.title}
      </p>

      <p className="max-w-xl text-neutral-600">
        {profile.intro}
      </p>

      <div className="flex gap-3">
        <button onClick={() => navigate("/projects")}
          className="rounded-md bg-neutral-900 px-6 py-3 text-white transition hover:bg-neutral-700" >
          View My Work
        </button>

        <button onClick={() => navigate("/contact")}
          className="rounded-md border border-neutral-900 px-6 py-3 transition hover:bg-neutral-900 hover:text-white" >
          Contact Me
        </button>
      </div>

    </div>
  );
}

export default Hero;