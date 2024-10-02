import Link from 'next/link';
import Footer from './Footer';
import { GradientBanner } from './GradientBanner';
import InnovatrLogo from './InnovatrLogo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-cosmos-background-start to-cosmos-background-end text-cosmos-text-light">
      <GradientBanner className="fixed inset-0 z-0" />
      <nav className="navbar bg-cosmos-primary/70 text-cosmos-text-light backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b-2 border-gradient-to-r from-transparent via-cosmos-accent to-transparent py-2">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case">
            <InnovatrLogo className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/solutions" className="hover:text-cosmos-accent">Solutions</Link></li>
            <li><Link href="/visions" className="hover:text-cosmos-accent">Visions</Link></li>
          </ul>
        </div>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-start pt-20 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
