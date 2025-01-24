import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-100 shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
