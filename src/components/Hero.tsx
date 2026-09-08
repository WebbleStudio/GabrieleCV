import type { ReactNode } from "react";
import { Button, Reveal } from "./ui";

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <section
      id="about"
      className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-start gap-10 px-6 pt-10 pb-16 md:grid-cols-[260px_1fr] md:gap-24 lg:grid-cols-[300px_1fr] lg:gap-28"
    >
      <Reveal className="md:sticky md:top-8">
        <div className="max-w-[280px]">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=720&q=80"
            alt="Albert Flores"
            className="aspect-square w-full rounded-[28px] object-cover"
          />
          <h1 className="mt-6 font-serif text-[40px] leading-[1.05] tracking-[-0.02em] text-ink">
            I'm Albert Flores
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Digital Product Designer based in Tegal, Indonesia.
          </p>
        </div>
      </Reveal>

      <div className="flex min-w-0 flex-col gap-14 md:pt-2">
        <Reveal delay={0.08}>
          <h2 className="max-w-[16ch] font-serif text-[48px] leading-[1.08] tracking-[-0.03em] text-ink sm:text-[56px] lg:text-[64px]">
            Passionate creating great experiences for Digital Product
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact" variant="solid">
              Talk with me
            </Button>
            <Button href="#works" variant="outline">
              See my work
            </Button>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
