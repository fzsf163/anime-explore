"use client";

import { OnlyData } from "@/types";
import { motion } from "framer-motion";
import { LazyMotion, domAnimation } from "framer-motion";
import { useState } from "react";
export default function MasonaryTile({ data }: OnlyData) {
  const [isHovered, setHovered] = useState(false);

  const fadein = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        layout
        className=" grid grid-cols-3 gap-10 max-w-fit  max-h-max items-center justify-items-center"
        variants={fadein}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {/* <h1 className="font-bold text-4xl p-6">{props.title}</h1> */}
        {data.map((each) => {
          return (
            <motion.section
              key={each.mal_id}
              variants={fadein}
              onTap={() => setHovered((x) => !x)}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.3 } }}
              >
                <h1>{each.title}</h1>
                <h1>{each.title_japanese}</h1>
              </motion.div>
              <motion.img
                src={each.images.webp.large_image_url}
                alt={each.title}
                width={500}
                height={400}
                className="w-fit h-max object-cover rounded-md shadow-lg shadow-slate-700 "
              />
            </motion.section>
          );
        })}
      </motion.div>
    </LazyMotion>
  );
}
