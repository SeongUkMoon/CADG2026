import type { Metadata } from 'next';
import RegistrationContent from '@/components/registration-content';

// GITHUB PAGES: This content-only route is safe to generate as a static page.
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Registration | CAD/Graphics 2026',
  description: 'Registration fees, policies, and payment information for CAD/Graphics 2026.',
};

export default function RegistrationPage() {
  return <RegistrationContent />;
}

