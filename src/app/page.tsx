import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Nav />
      <div className="ml-24 px-8">
        <section id="home">
          <Hero />
        </section>
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
