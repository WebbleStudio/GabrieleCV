import { motion } from "motion/react";
import type { WorkPhoto } from "../data";

const ease = [0.22, 1, 0.36, 1] as const;

export function BentoGallery({
  photos,
  alt,
}: {
  photos: WorkPhoto[];
  alt: string;
}) {
  if (!photos.length) return null;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-5">
      {photos.map((photo, i) => (
        <motion.div
          key={`${photo.src}-${i}`}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 + i * 0.07, ease }}
          className={`relative overflow-hidden rounded-[22px] bg-black/5 ${
            photo.wide
              ? "col-span-2 aspect-video"
              : photo.aspect === "4/5"
                ? "aspect-[4/5]"
                : "aspect-[5/5.5]"
          }`}
        >
          {photo.src.endsWith(".mp4") ? (
            <motion.video
              src={encodeURI(photo.src)}
              muted
              loop
              playsInline
              autoPlay
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", bounce: 0, visualDuration: 0.4 }}
              className="absolute inset-0 size-full object-cover object-center will-change-transform"
            />
          ) : (
            <motion.img
              src={encodeURI(photo.src)}
              alt={`${alt} ${i + 1}`}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", bounce: 0, visualDuration: 0.4 }}
              className="absolute inset-0 size-full object-cover object-center will-change-transform"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
