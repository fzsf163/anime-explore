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
  const [isMouse, setMouse] = useState(false);

  return (
    <motion.div
      layout
      variants={porps.variant}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.section
        key={porps.mal_id}
        variants={porps.variant}
        className="space-y-4 p-3 relative"
      >
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

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMouse ? "fit-content" : 0,
            opacity: isMouse ? 1 : 0,
          }}
          className="bg-black/60 absolute rounded-xl top-4 left-4"
        >
          <h1 className="m-5 text-current text-lg font-mono font-bold">
            Tap to Expand
          </h1>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
          onTap={() => {
            setHovered((x) => !x);
            setMouse((x) => false);
          }}
          onHoverStart={() => setMouse((x) => true)}
          onHoverEnd={() => setMouse((x) => false)}
          src={porps.img}
          alt={porps.title}
          width={500}
          height={400}
          className="w-[400px] h-fit object-contain rounded-md shadow-lg shadow-slate-500 border border-blue-400"
        />
      </motion.section>
    </motion.div>
  );
}
