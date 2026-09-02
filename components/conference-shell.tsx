'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { withSiteBasePath } from '@/lib/site-path';

const navigation = [
  { label: 'Top', href: 'https://www.asiagraphics.org/CADGraphics2026' },
  { label: 'Committee', href: 'https://www.asiagraphics.org/CADGraphics2026/committee' },
  { label: 'Keynote Speaker', href: 'https://www.asiagraphics.org/CADGraphics2026/keynote-speaker' },
  { label: 'Paper Submission', href: 'https://www.asiagraphics.org/CADGraphics2026/paper-submission' },
  { label: 'Call for Sponsors', href: 'https://www.asiagraphics.org/CADGraphics2026/sponsors' },
  { label: 'Registration', href: withSiteBasePath('/registration/') },
  { label: 'Visitor Info', href: withSiteBasePath('/info/') },
];

export function ConferenceShell({
  title,
  activePage,
  children,
}: {
  title: string;
  activePage: 'Registration' | 'Visitor Info';
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-root">
      <header className="site-nav">
        <div className="site-container nav-inner">
          <a className="logo-link" href="https://www.asiagraphics.org/CADGraphics2026" aria-label="CAD/Graphics 2026 home">
            <img src={withSiteBasePath('/images/cadg-2026-logo.png')} alt="CAD/Graphics 2026" className="site-logo" />
          </a>

          <nav className="desktop-nav" aria-label="Conference navigation">
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <a className={item.label === activePage ? 'active' : undefined} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="mobile-nav-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile conference navigation">
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <a className={item.label === activePage ? 'active' : undefined} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <section className="page-banner">
        <div className="site-container">
          <h1>{title}</h1>
        </div>
      </section>

      <main className="content-section">
        <div className="site-container content-container">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="site-container footer-inner">
          <p>© 2026, CCF CAD / Graphics 2026 All Rights Reserved.</p>
          <p>Organizers: CCF Technical Committee on CAD and Graphics</p>
        </div>
      </footer>
    </div>
  );
}

