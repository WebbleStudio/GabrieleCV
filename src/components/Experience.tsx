import { motion } from "motion/react";
import { experience } from "../data";
import { Reveal, SectionHeader } from "./ui";

export function Experience() {
  return (
    <section>
      <Reveal>
        <SectionHeader>Working experience</SectionHeader>
      </Reveal>
      <ul className="flex flex-col gap-3">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <motion.li
              whileHover={{ y: -2 }}
              transition={{ type: "spring", bounce: 0.15, visualDuration: 0.35 }}
              className="flex items-center gap-4 rounded-[22px] bg-card px-5 py-4 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
            >
              <span
                className="grid size-11 shrink-0 place-items-center rounded-full text-[12px] font-bold text-white"
                style={{ background: job.color }}
              >
                {job.mark}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[15px] font-semibold tracking-[-0.02em]">
                  {job.role}
                </p>
                <p className="text-[13px] text-muted">{job.company}</p>
              </div>
              <p className="hidden shrink-0 text-[13px] text-muted sm:block">
                {job.dates}
              </p>
            </motion.li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
