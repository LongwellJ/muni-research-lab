import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Ophthalmology Research Lab',
  description: 'Modern web homepage for research tools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Global navigation / header goes here */}
        <nav className="p-4 bg-slate-200">
          <Link href="/">
            <h1 className="text-xl font-bold text-gray-800 cursor-pointer">
              Muni Group Homepage
            </h1>
          </Link>
        </nav>

        {/* Main content */}
        <main>{children}</main>

        {/* Global footer */}
        <footer className="text-center p-4 bg-slate-100">
          <p>© 2025 Muni Research Lab</p>
        </footer>
      </body>
    </html>
  );
}
