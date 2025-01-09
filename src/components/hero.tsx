"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center pl-32 pr-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold tracking-tight">
          Hi,
          <br />
          I'm Varalika,
          <br />
          <span className="text-zinc-400">Mathematics & Computing Student</span>
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          IDD student at IIT BHU with a passion for Image Processing, InfoSec,
          and Development.
        </p>
        <div className="mt-8">
          <Button asChild>
            <a href="/contact">Get in touch</a>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
