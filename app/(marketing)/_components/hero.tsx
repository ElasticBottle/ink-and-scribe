"use client";

import { motion } from "framer-motion";

import { Icons } from "components/icons";
import { buttonVariants } from "components/ui/button";
import HeroVideoDialog from "components/ui/hero-video";
import { cn } from "lib/utils";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1];

function HeroTitles() {
  return (
    <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="text-center font-medium text-4xl text-foreground leading-tight sm:text-5xl md:text-6xl"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {["Trademark applications", "in days", "not months"].map(
          (text, index) => (
            <motion.span
              key={index}
              className="inline-block text-balance px-1 font-semibold md:px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease,
              }}
            >
              {text}
            </motion.span>
          ),
        )}
      </motion.h1>
      <motion.p
        className="mx-auto max-w-xl text-balance text-center text-lg text-muted-foreground leading-7 sm:text-xl sm:leading-9"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        Secure your brand identity with confidence. Our agency helps you file
        trademarks quickly and accurately, eliminating paperwork and reducing
        registration time by up to 90%.
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href="/signup"
          className={cn(
            buttonVariants({ variant: "default" }),
            "flex w-full gap-2 text-background sm:w-auto",
          )}
        >
          <Icons.logo className="size-6" />
          Protect your brand now
        </Link>
      </motion.div>
      <motion.p
        className="mt-5 text-muted-foreground text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        Lowest rates guaranteed or your money back.
      </motion.p>
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/watch?v=xvFZjo5PgG0"
        thumbnailSrc="/dashboard.png"
        thumbnailAlt="Hero Video"
        className="mt-16 max-w-screen-lg rounded-lg border shadow-lg"
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="relative flex w-full flex-col items-center justify-start px-4 sm:px-6 lg:px-8">
        <HeroTitles />
        <HeroCTA />
        <HeroImage />
        <div className="-bottom-12 pointer-events-none absolute inset-x-0 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4" />
      </div>
    </section>
  );
}
