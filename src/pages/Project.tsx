import { Link, Navigate, useParams } from "react-router-dom";
import { BentoGallery } from "../components/BentoGallery";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Reveal } from "../components/ui";
import { getWork, workPhotos, works } from "../data";

export function Project() {
  const { slug } = useParams();
  const work = slug ? getWork(slug) : undefined;

  if (!work) {
    return <Navigate to="/" replace />;
  }

  const index = works.findIndex((item) => item.slug === work.slug);
  const next = works[(index + 1) % works.length];
  const prev = works[(index - 1 + works.length) % works.length];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="mx-auto w-full max-w-[1080px] px-6 pt-10 pb-16">
        <Reveal>
          <Link
            to="/#works"
            className="text-[14px] font-medium text-muted transition-colors hover:text-ink"
          >
            ← Selected works
          </Link>
        </Reveal>

        <Reveal delay={0.06} className="mt-8 max-w-[720px]">
          <h1 className="font-serif text-[48px] leading-[1.08] tracking-[-0.03em] text-ink sm:text-[56px]">
            {work.name}
          </h1>
          <p className="mt-4 text-[14px] font-medium tracking-[-0.01em] text-ink">
            {work.tags.join("  ·  ")}
          </p>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-muted">
            {work.blurb}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <BentoGallery photos={workPhotos(work)} alt={work.name} />
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <Link
              to={`/work/${prev.slug}`}
              className="text-[14px] font-medium text-muted transition-colors hover:text-ink"
            >
              ← {prev.name}
            </Link>
            <Link
              to={`/work/${next.slug}`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-6 text-[14px] font-medium tracking-[-0.01em] text-white"
            >
              Next project
            </Link>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
