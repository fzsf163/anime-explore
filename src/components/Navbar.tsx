"use client";
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

let tabs = [
  { id: "home", label: "Explore", href: "/" },
  { id: "popular", label: "Popular", href: "popular" },
  { id: "genres", label: "Genres", href: "genres" },
  { id: "manga", label: "Manga", href: "manga" },
];

export default function HeadNavBar() {
  const router = usePathname();
  const pathname = router.split("/");
  let [activeTab, setActiveTab] = useState(
    pathname[1] === "" ? "home" : pathname[1]
  );

  return (
    <div className="flex space-x-3 items-center justify-center py-3 mb-2">
      {tabs.map((tab) => (
        <Link href={tab.href} key={tab.id}>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full px-5 py-2.5 text-lg font-semibold text-gray-200  `}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="navpill"
                className="absolute inset-0 z-10 bg-gray-200/40 mix-blend-lighte shadow-[2px_5px_5px_rgba(179,250,240)]"
                style={{ borderRadius: 10 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
              />
            )}
            {tab.label}
          </button>
        </Link>
      ))}
    </div>
  );
}
