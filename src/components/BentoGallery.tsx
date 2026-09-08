import { motion } from "motion/react";

function Frame({
  src,
  alt,
  ratio,
}: {
  src: string;
  alt: string;
  ratio: "video" | "square";
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", bounce: 0.12, visualDuration: 0.35 }}
      className={`relative overflow-hidden rounded-[22px] bg-black/5 will-change-transform ${
        ratio === "video" ? "aspect-video" : "aspect-square"
      }`}
    >
      <img src={src} alt={alt} className="absolute inset-0 size-full object-cover" />
    </motion.div>
  );
}

function rowsFrom(photos: string[]) {
  const rows: { type: "wide" | "pair"; shots: string[] }[] = [];
  let i = 0;
  let wide = true;

  while (i < photos.length) {
    if (wide) {
      rows.push({ type: "wide", shots: [photos[i]] });
      i += 1;
    } else {
      rows.push({ type: "pair", shots: photos.slice(i, i + 2) });
      i += 2;
    }
    wide = !wide;
  }

  return rows;
}

export function BentoGallery({
  photos,
  alt,
}: {
  photos: string[];
  alt: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      {rowsFrom(photos).map((row, rowIndex) =>
        row.type === "wide" || row.shots.length === 1 ? (
          <Frame
            key={`wide-${rowIndex}`}
            src={row.shots[0]}
            alt={`${alt} ${rowIndex + 1}`}
            ratio="video"
          />
        ) : (
          <div key={`pair-${rowIndex}`} className="grid grid-cols-2 gap-4 md:gap-5">
            {row.shots.map((src, i) => (
              <Frame
                key={`${src}-${i}`}
                src={src}
                alt={`${alt} ${rowIndex + 1}-${i + 1}`}
                ratio="square"
              />
            ))}
          </div>
        ),
      )}
    </div>
  );
}
