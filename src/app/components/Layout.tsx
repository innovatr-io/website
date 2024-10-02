import Link from 'next/link';
import Footer from './Footer';
import { GradientBanner } from './GradientBanner';
import InnovatrLogo from './InnovatrLogo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-cosmos-background-start to-cosmos-background-end text-cosmos-text-light">
      <GradientBanner className="fixed inset-0 z-0" />
      <nav className="navbar bg-cosmos-primary/30 text-cosmos-text-light backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b-2 border-gradient-to-r from-transparent via-cosmos-accent to-transparent py-2 px-4">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case p-0">
            <InnovatrLogo className="h-6 w-auto sm:h-8" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 hidden sm:flex">
            <li><Link href="/solutions" className="hover:text-cosmos-accent">Solutions</Link></li>
            <li><Link href="/visions" className="hover:text-cosmos-accent">Visions</Link></li>
          </ul>
          <div className="dropdown dropdown-end sm:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cosmos-primary rounded-box w-52">
              <li><Link href="/solutions">Solutions</Link></li>
              <li><Link href="/visions">Visions</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-start pt-16 sm:pt-20 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
