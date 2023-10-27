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
  const [isTapped, setTapped] = useState(false);
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
        className="relative space-y-3 min-w-full"
      >
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isTapped ? "fit-content" : 0,
            opacity: isTapped ? 1 : 0,
          }}
        >
          <h1>{porps.title}</h1>
          <h1>{porps.title_japanese}</h1>
        </motion.div>

        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: isMouse ? "fit-content" : 0,
            opacity: isMouse ? 1 : 0,
          }}
        >
          <motion.h1
            layout
            layoutId="textclose"
            className={`py-2 px-4 bg-green-600  rounded-md text-lg font-mono font-bold absolute ${
              isTapped ? "text-center" : "text-left"
            }`}
          >
            Tap to {isTapped ? "Close" : "Expand"}
          </motion.h1>
        </motion.div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
          onTap={() => {
            setTapped((x) => !x);
          }}
          onHoverStart={() => setMouse((x) => true)}
          onHoverEnd={() => setMouse((x) => false)}
          src={porps.img}
          alt={porps.title}
          width={500}
          height={400}
          className="object-cover rounded-md shadow-lg shadow-slate-500 border border-blue-100/20"
        />
      </motion.section>
    </motion.div>
  );
}
