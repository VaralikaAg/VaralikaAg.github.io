"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/constants/education";

export function Education() {
  return (
    <section className="min-h-screen pl-32 pr-8 py-24">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">{edu.institution}</p>
                <p className="text-zinc-500 text-sm mt-1">{edu.year}</p>
                <ul className="mt-2 space-y-1">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-zinc-400 text-sm">
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
