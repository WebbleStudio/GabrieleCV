import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { works } from "../data";
import { Reveal, SectionHeader } from "./ui";

export function Works() {
  return (
    <section id="works" className="mx-auto w-full max-w-[1080px] px-6 pt-10 pb-20">
      <Reveal>
        <SectionHeader>Selected works</SectionHeader>
      </Reveal>
      <div className="flex flex-col gap-8">
        {works.map((work, i) => (
          <Reveal key={work.slug} delay={i * 0.06}>
            <Link to={`/work/${work.slug}`} className="block">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", bounce: 0.12, visualDuration: 0.4 }}
                className="overflow-hidden rounded-[28px] bg-[#7541ee]/10 p-3 sm:p-4"
              >
                <div className="aspect-video overflow-hidden rounded-[18px] bg-black/5">
                  <img
                    src={work.image}
                    alt={work.name}
                    className="size-full object-cover"
                  />
                </div>
                <div className="px-2 pt-5 pb-2">
                  <h3 className="font-serif text-[32px] leading-none tracking-[-0.02em] text-ink">
                    {work.name}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium tracking-[-0.01em] text-ink">
                    {work.tags.join("  ·  ")}
                  </p>
                  <p className="mt-2 max-w-[52ch] text-[14px] font-medium leading-relaxed text-black/60">
                    {work.blurb}
                  </p>
                </div>
              </motion.article>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
