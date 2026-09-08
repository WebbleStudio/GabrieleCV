import { Gem, Images, Kanban, Layers, Megaphone, Palette } from "lucide-react";
import { motion } from "motion/react";
import type { ComponentType } from "react";
import { services } from "../data";
import { Reveal, SectionHeader } from "./ui";

const icons: Record<(typeof services)[number]["icon"], ComponentType<{ size?: number; className?: string }>> = {
  layers: Layers,
  palette: Palette,
  kanban: Kanban,
  gem: Gem,
  images: Images,
  megaphone: Megaphone,
};

export function Services() {
  return (
    <section id="services">
      <Reveal>
        <SectionHeader>What i do</SectionHeader>
      </Reveal>
      <ul className="flex flex-col gap-3">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <Reveal key={service.title} delay={i * 0.05}>
              <motion.li
                whileHover={{ y: -2 }}
                transition={{ type: "spring", bounce: 0.15, visualDuration: 0.35 }}
                className="flex gap-4 rounded-[22px] bg-card px-5 py-5"
              >
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-[#7541ee] text-white">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-[16px] font-semibold tracking-[-0.02em]">
                    {service.title}
                  </p>
                  <p className="mt-1 max-w-[62ch] text-[14px] leading-relaxed text-muted">
                    {service.body}
                  </p>
                </div>
              </motion.li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
