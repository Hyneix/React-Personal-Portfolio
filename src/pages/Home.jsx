
import { profile } from "../data/data";

function Home() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center lg:h-full">
      <h1 className="text-5xl font-semibold text-neutral-900 sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl text-neutral-500">{profile.title}</p>
    </section>
  );
}

export default Home;
