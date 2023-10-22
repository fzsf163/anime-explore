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
      className="w-fit mx-auto space-y-5 mt-6"
    >
      <h1>{title}</h1>
      <img
        src={img}
        alt="image"
        className="aspect-[1/2] max-h-[500px]"
        width={500}
        height={600}
      />
    </motion.div>
  );
}
