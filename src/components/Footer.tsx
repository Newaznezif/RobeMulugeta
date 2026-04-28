import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden group-hover:scale-110 transition-transform">
              <Image src="/assets/portrait.jpg" alt="Robe Mulugeta" fill className="object-cover" sizes="32px" />
            </div>
            <span className="text-lg font-display font-bold">
              ROBE<span className="text-primary">.</span>M
            </span>
          </Link>

          <div className="flex gap-8 text-sm text-foreground/50">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <p className="text-sm text-foreground/30">
            © {new Date().getFullYear()} Robe Mulugeta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
