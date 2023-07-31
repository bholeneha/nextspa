'use client';

import './globals.scss';
// import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'NextSpa',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
            {children}
        </SessionProvider>
      </body>
    </html>
  )
}
