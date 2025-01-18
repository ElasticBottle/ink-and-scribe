"use client";

import { motion } from "framer-motion";
import { siteConfig } from "~/lib/config";
import { ease } from "./hero/constant";

export function Announcement() {
  if (!siteConfig.announcement) return null;
  return (
    <motion.a
      href={siteConfig.announcement.href}
      className="mx-auto flex max-w-80 items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent md:max-w-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <span>📣</span>
      <p className="text-wrap font-medium text-primary text-xs sm:text-sm">
        {siteConfig.announcement.title}
      </p>
      <span className="text-primary">&rarr;</span>
    </motion.a>
  );
}
