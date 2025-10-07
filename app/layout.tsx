import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: 'Pink-Black Team | AI Innovation & Investment',
  description: 'Innovative AI development team seeking investment for cutting-edge projects',
  keywords: ['AI', 'innovation', 'investment', 'technology', 'Pink-Black Team'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
