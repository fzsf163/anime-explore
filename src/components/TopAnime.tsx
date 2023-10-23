"use client";

import { motion } from "framer-motion";

export type Props = {
  key: number;
  title: string;
  img: string;
};

export default function TopAnime({ key, title, img }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      key={key}
      className="w-fit  space-y-5 border p-4 rounded-md border-sky-100/30"
    >
      <h1>{title}</h1>
      <img
        src={img}
        alt="image"
        className="aspect-[16/12] max-h-[500px] object-cover rounded-md"
        width={500}
        height={600}
      />
    </motion.div>
  );
}
