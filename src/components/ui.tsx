import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-5 text-[22px] font-semibold tracking-[-0.02em] text-ink">
      {children}
    </h2>
  );
}

type ButtonProps = HTMLMotionProps<"a"> & {
  variant?: "solid" | "outline" | "light";
};

export function Button({
  variant = "solid",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const styles = {
    solid:
      "bg-ink text-white border border-ink hover:bg-[#2a2a2a]",
    outline:
      "bg-transparent text-ink border border-ink/20 hover:border-ink/50",
    light:
      "bg-white text-ink border border-transparent hover:bg-cream",
  }[variant];

  return (
    <motion.a
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", bounce: 0.2, visualDuration: 0.35 }}
      className={`inline-flex h-11 items-center justify-center rounded-full px-6 text-[14px] font-medium tracking-[-0.01em] ${styles} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
