import { Link } from "react-router-dom";
import { Button } from "./ui";
import { navLinks } from "../data";

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1080px] items-center gap-8 px-6 pt-8 pb-4">
      <Link
        to="/"
        aria-label="Gabriele Consolo"
        className="shrink-0 text-ink transition-colors duration-300 hover:text-accent"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 230 230"
          fill="none"
          aria-hidden
          className="h-9 w-9"
        >
          <path d="M57.8965 57.9023V171.857L0 113.961V67.3986C0 62.191 4.28862 57.9023 9.49625 57.9023H57.8965Z" fill="currentColor" />
          <path d="M229.787 229.755L171.891 171.858V125.296C171.891 120.088 176.179 115.8 181.387 115.8H220.291C225.498 115.8 229.787 120.088 229.787 125.296V229.755Z" fill="currentColor" />
          <path d="M57.8984 222.712V171.861H171.853V222.712C171.853 226.695 168.637 229.758 164.808 229.758H65.0972C61.1149 229.758 57.8984 226.541 57.8984 222.712Z" fill="currentColor" />
          <path d="M171.853 57.9033H57.8984V9.50308C57.8984 4.29546 62.1871 0.00683594 67.3947 0.00683594H113.957L171.853 57.9033Z" fill="currentColor" />
          <path d="M172.336 57.4439V6.99053C172.336 3.03936 175.587 0 179.458 0H222.657C226.683 0 229.78 3.19133 229.78 6.99053V50.3014C229.78 54.2526 226.528 57.2919 222.657 57.2919H172.336V57.4439Z" fill="currentColor" />
        </svg>
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
        <Button href="/#works" variant="accent">
          See my work
        </Button>
      </div>
    </header>
  );
}
