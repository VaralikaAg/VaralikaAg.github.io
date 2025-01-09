"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 flex h-screen w-24 flex-col items-center justify-center gap-8 border-r border-zinc-800">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm transition-colors hover:text-white ${
            pathname === link.href ? "text-white" : "text-zinc-500"
          }`}
        >
          <motion.span
            className="relative"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            {link.label}
          </motion.span>
        </Link>
      ))}
    </nav>
  );
}
