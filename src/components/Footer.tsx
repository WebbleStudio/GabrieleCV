import { Link } from "react-router-dom";
import { Button } from "./ui";
import { navLinks } from "../data";

export function Footer() {
  const left = navLinks.slice(0, 2);
  const right = navLinks.slice(2);

  return (
    <footer id="contact" className="mx-auto w-full max-w-[1080px] px-6 pb-10">
      <div className="flex flex-col gap-8 rounded-[40px] bg-ink px-6 py-8 text-white sm:rounded-[48px] sm:px-10 md:flex-row md:items-center md:gap-12">
        <div className="flex min-w-0 items-center gap-4 md:max-w-[280px]">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80"
            alt=""
            className="size-14 shrink-0 rounded-2xl object-cover"
          />
          <div>
            <p className="font-serif text-[26px] leading-tight">I'm Albert Flores</p>
            <p className="mt-1 text-[13px] text-white/55">
              Digital Product Designer based in Tegal, Indonesia.
            </p>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-2 text-[14px] md:justify-items-center">
          <div className="flex flex-col gap-2">
            {left.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className="text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {right.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                className="text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:ml-auto">
          <Button href="mailto:albert@example.com" variant="light">
            Talk with me
          </Button>
        </div>
      </div>
    </footer>
  );
}
