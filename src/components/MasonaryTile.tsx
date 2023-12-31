"use client";

import { OnlyData } from "@/types";
import { Variants, motion } from "framer-motion";
import { LazyMotion, domAnimation } from "framer-motion";
import TileImage from "./TileImage";

export default function MasonaryTile({ data }: OnlyData) {
  // console.log(data[0]);
  const fadein: Variants = {
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
      <div className="columns-3 ">
        {data.map((anime) => {
          return (
            <section
              key={anime.mal_id}
              className=" h-fit mb-2 isolate break-inside-avoid-column"
            >
              <TileImage
                variant={fadein}
                title={anime.title}
                mal_id={anime.mal_id}
                img={anime.images.webp.large_image_url}
                title_english={anime.title_english}
                title_japanese={anime.title_japanese}
              ></TileImage>
            </section>
          );
        })}
      </div>
    </LazyMotion>
  );
}
