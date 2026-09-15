import { motion } from "motion/react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

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

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "outline" | "light" | "accent";
};

export function Button({
  variant = "solid",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const styles = {
    solid:
      "bg-ink text-white border border-ink hover:bg-accent hover:border-accent",
    outline:
      "bg-transparent text-ink border border-ink/20 hover:bg-ink hover:text-white hover:border-ink",
    light:
      "bg-white text-ink border border-transparent hover:bg-accent hover:text-white",
    accent:
      "bg-transparent text-ink border border-ink/20 hover:bg-accent hover:text-white hover:border-accent",
  }[variant];

  return (
    <a
      className={`inline-flex h-11 items-center justify-center rounded-full px-6 text-[14px] font-medium tracking-[-0.01em] transition-colors duration-300 ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
