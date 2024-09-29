import Link from 'next/link';

export default function Home() {
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
      <main className="flex-grow flex flex-col items-center justify-center p-24 mt-16">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Company</h1>
        <p className="text-xl mb-8">Innovating for a better future</p>
        <div className="flex space-x-4">
          <Link href="/solutions" className="btn btn-primary">Our Solutions</Link>
          <Link href="/visions" className="btn btn-secondary">Our Visions</Link>
        </div>
      </main>
    </div>
  );
}
