"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-start justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Hi,
          <br />
          I&apos;m Varalika,
          <br />
          <span className="text-zinc-500">Mathematics & Computing Student</span>
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
          IDD student at IIT BHU with a passion for Image Processing, InfoSec,
          and Frontend Development.
        </p>
        <div className="mt-8">
          <Button asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
