"use client";
import { Variants, motion } from "framer-motion";
import { useState } from "react";
type Props = {
  variant: Variants;
  title: string;
  mal_id: number;
  title_english: string;
  title_japanese: string;
  img: string;
};

export default function TileImage({ ...porps }: Props) {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      variants={porps.variant}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.section key={porps.mal_id} variants={porps.variant} className="space-y-4 p-3 ">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? "fit-content" : 0,
            opacity: isHovered ? 1 : 0,
          }}
        >
          <h1>{porps.title}</h1>
          <h1>{porps.title_japanese}</h1>
          {/* <h2>{porps.title_english}</h2> */}
        </motion.div>
        <motion.img
          whileInView={{ opacity: 1, transition: { duration: 2.3 } }}
          onTap={() => setHovered((x) => !x)}
          src={porps.img}
          alt={porps.title}
          width={500}
          height={400}
          className="w-fit h-max object-cover rounded-md shadow-lg shadow-slate-700"
        />
      </motion.section>
    </motion.div>
  );
}
