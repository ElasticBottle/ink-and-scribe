"use client";

import { motion } from "framer-motion";
import { siteConfig } from "~/lib/config";

const ease = [0.16, 1, 0.3, 1];

export function Announcement() {
  if (!siteConfig.announcement) return null;
  return (
    <motion.a
      href={siteConfig.announcement.href}
      className="mx-auto flex w-fit items-center space-x-2 whitespace-pre rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <p className="font-medium text-primary text-xs sm:text-sm">
        📣 {siteConfig.announcement.title}
      </p>
      <span className="text-primary">&rarr;</span>
    </motion.a>
  );
}
