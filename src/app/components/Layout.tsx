import Link from 'next/link';
import Footer from './Footer';
import { cn } from "@/utils/cn";

export default function Layout({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("flex flex-col min-h-screen bg-cosmos-background text-cosmos-text-light", className)}>
      <nav className="navbar bg-cosmos-primary text-cosmos-text-light fixed top-0 left-0 right-0 z-50 border-b-4 border-gradient-to-r from-cosmos-primary via-cosmos-secondary to-cosmos-accent">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">Innovatr</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/about" className="hover:text-cosmos-accent">About</Link></li>
            <li><Link href="/solutions" className="hover:text-cosmos-accent">Solutions</Link></li>
            <li><Link href="/visions" className="hover:text-cosmos-accent">Visions</Link></li>
          </ul>
        </div>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-start pt-20 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
