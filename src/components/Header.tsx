import { Link } from "react-router-dom";
import { Button } from "./ui";
import { navLinks } from "../data";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1080px] items-center gap-8 px-6 pt-8 pb-4">
      <Link to="/" className="font-serif text-[28px] leading-none text-ink">
        Albert
      </Link>
      <nav className="hidden flex-1 items-center gap-7 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={`/${link.href}`}
            className="text-[14px] font-medium text-ink/80 transition-colors hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="ml-auto">
        <Button href="/#works" variant="outline">
          See my work
        </Button>
      </div>
    </header>
  );
}
