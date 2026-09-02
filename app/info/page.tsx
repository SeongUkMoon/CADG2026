import type { Metadata } from 'next';
import InfoContent from '@/components/info-content';

// GITHUB PAGES: This content-only route is safe to generate as a static page.
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Visitor Info | CAD/Graphics 2026',
  description: 'Venue, transportation, accommodation, and travel information for CAD/Graphics 2026.',
};

export default function InfoPage() {
  return <InfoContent />;
}

