import { profile } from "../data/data";

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-6 py-6 text-sm text-neutral-500">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/Hyneix?tab=repositories"
            className="hover:text-neutral-900 hover:-translate-y-1 hover:shadow-md">
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sushant-karki-700980429/"
            className="hover:text-neutral-900 hover:-translate-y-1 hover:shadow-md">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
