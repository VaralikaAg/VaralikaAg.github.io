"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/constants/projects";

export function Projects() {
  return (
    <section className="min-h-screen pl-32 pr-8 py-24">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-400">{project.description}</p>
                <ul className="mt-4 space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-zinc-400 text-sm flex items-start"
                    >
                      <span className="mr-2">•</span>
                      {achievement}
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
