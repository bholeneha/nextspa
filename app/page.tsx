'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the '/login' path on startup
    router.push('/login');
  }, [router]);

  return null;
}
