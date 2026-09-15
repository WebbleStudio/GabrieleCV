import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { Button, Reveal } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;
const maskRest = "circle(0% at right top)";
const maskHover = "circle(150% at right top)";

function ProfileSwap() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-[28px]"
    >
      <img
        src="/Gabriele%20Consolo.webp"
        alt="Gabriele Consolo"
        className="size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          clipPath: hovered ? maskHover : maskRest,
          transition: `clip-path 0.65s cubic-bezier(${ease.join(",")})`,
        }}
      >
        <img
          src="/logo%20hover.webp"
          alt=""
          className="size-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export function Hero({ children }: { children?: ReactNode }) {
  return (
    <section
      id="about"
      className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-start gap-10 px-6 pt-10 pb-16 md:grid-cols-[260px_1fr] md:gap-24 lg:grid-cols-[300px_1fr] lg:gap-28"
    >
      <Reveal className="md:sticky md:top-8">
        <div className="max-w-[280px]">
          <ProfileSwap />
          <h1 className="mt-6 font-serif text-[40px] leading-[1.05] tracking-[-0.02em] text-ink">
            I'm Gabriele Consolo
          </h1>
          <p className="mt-3 text-[15px] font-medium leading-relaxed text-muted">
            Digital Product Designer and Art Director based in Italy.
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
