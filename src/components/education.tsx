"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/constants/education";

export function Education() {
  return (
    <section id="education" className="min-h-screen pt-24 pb-16">
      <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-zinc-900 dark:text-zinc-100">
                  {edu.degree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {edu.institution}
                </p>
                <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-1">
                  {edu.year}
                </p>
                <ul className="mt-2 space-y-1">
                  {edu.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-zinc-600 dark:text-zinc-400 text-sm"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
