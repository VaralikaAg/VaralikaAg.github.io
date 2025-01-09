import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="ml-24">
        <Hero />
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
