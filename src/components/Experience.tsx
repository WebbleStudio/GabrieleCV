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
        {experience.map((job, i) => {
          const href = "href" in job ? job.href : undefined;
          const rowClass = `group flex items-center gap-4 rounded-[22px] bg-card px-5 py-4 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-colors duration-300 ${
            href ? "cursor-pointer hover:bg-[#7541ee]" : ""
          }`;
          const textHover = href ? "group-hover:text-white" : "";

          const body = (
            <>
              <img
                src={encodeURI(job.logo)}
                alt=""
                className="size-11 shrink-0 rounded-full bg-white object-cover ring-1 ring-ink/10"
              />
              <div className="min-w-0 flex-1">
                <p
                  className={`text-[15px] font-semibold tracking-[-0.02em] transition-colors duration-300 ${textHover}`}
                >
                  {job.role}
                </p>
                <p
                  className={`text-[13px] text-muted transition-colors duration-300 ${textHover}`}
                >
                  {job.company}
                </p>
              </div>
              <p
                className={`hidden shrink-0 text-[13px] text-muted transition-colors duration-300 sm:block ${textHover}`}
              >
                {job.dates}
              </p>
            </>
          );

          return (
            <Reveal key={job.company} delay={i * 0.06}>
              <li>
                {href ? (
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${job.company} — ${job.role}`}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", bounce: 0.15, visualDuration: 0.35 }}
                    className={rowClass}
                  >
                    {body}
                  </motion.a>
                ) : (
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", bounce: 0.15, visualDuration: 0.35 }}
                    className={rowClass}
                  >
                    {body}
                  </motion.div>
                )}
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
