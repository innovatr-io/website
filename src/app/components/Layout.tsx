import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="navbar bg-base-100 fixed top-0 z-10 shadow-md">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">innovatr</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/visions">Visions</Link></li>
          </ul>
        </div>
      </nav>
      <main className="flex-grow flex flex-col items-center justify-start p-24 mt-16">
        {children}
      </main>
    </div>
  );
}
