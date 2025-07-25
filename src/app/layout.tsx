import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/home_page_component/Navbar';

export const metadata: Metadata = {
  title: 'MyCompany',
  description: 'Next.js App with Navbar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: '0px' }}>{children}</main> {/* 👈 Push content below navbar */}
      </body>
    </html>
  );
}
