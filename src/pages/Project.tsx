import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { BentoGallery } from "../components/BentoGallery";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Reveal } from "../components/ui";
import { getWork, workPhotos, works } from "../data";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={dir === "right" ? "rotate-180" : undefined}
    >
      <path
        d="M12.25 7H1.75M1.75 7 6 2.75M1.75 7 6 11.25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Project() {
  const { slug } = useParams();
  const work = slug ? getWork(slug) : undefined;
  const [pinned, setPinned] = useState(true);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const io = new IntersectionObserver(
      ([entry]) => setPinned(!entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: "0px 0px -112px 0px" },
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  if (!work) {
    return <Navigate to="/" replace />;
  }

  const index = works.findIndex((item) => item.slug === work.slug);
  const next = works[(index + 1) % works.length];
  const prev = works[(index - 1 + works.length) % works.length];

  const navClass =
    "flex w-full items-center justify-between gap-4 " +
    (pinned
      ? "pointer-events-auto fixed inset-x-0 bottom-12 z-30 mx-auto max-w-[1080px] px-6"
      : "mt-10");

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="mx-auto w-full max-w-[1080px] px-6 pt-10 pb-8">
        <Reveal className="text-center">
          <h1 className="font-serif text-[48px] leading-[1.08] tracking-[-0.03em] text-ink sm:text-[56px]">
            {work.name}
          </h1>
          <p className="mt-4 text-[14px] font-medium tracking-[-0.01em] text-ink">
            {work.tags.join("  ·  ")}
          </p>
        </Reveal>

        <div className="mt-8">
          <BentoGallery photos={workPhotos(work)} alt={work.name} />
        </div>

        {pinned ? <div className="mt-10 h-11" aria-hidden /> : null}

        <nav className={navClass}>
          <Link
            to={`/work/${prev.slug}`}
            className="group inline-flex h-11 items-center gap-3 rounded-full border border-ink/20 bg-cream/80 py-1 pr-5 pl-1.5 text-[14px] font-medium tracking-[-0.01em] text-ink backdrop-blur-md transition-colors duration-300 hover:border-ink hover:bg-ink/80 hover:text-white"
          >
            <span className="grid size-8 place-items-center rounded-full bg-ink/5 transition-colors duration-300 group-hover:bg-white/15">
              <Arrow dir="left" />
            </span>
            {prev.name}
          </Link>
          <Link
            to={`/work/${next.slug}`}
            className="group inline-flex h-11 items-center gap-3 rounded-full border border-ink/80 bg-ink/80 py-1 pr-1.5 pl-5 text-[14px] font-medium tracking-[-0.01em] text-white backdrop-blur-md transition-colors duration-300 hover:border-accent/80 hover:bg-accent/80"
          >
            Next project
            <span className="grid size-8 place-items-center rounded-full bg-white/15">
              <Arrow dir="right" />
            </span>
          </Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
