import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CAD/Graphics 2026 — Registration & Visitor Info',
  description: 'Registration and visitor information for CCF CAD/Graphics 2026 in Seoul, Korea.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

