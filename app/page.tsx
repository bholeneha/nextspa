'use client';

import styles from './styles/page.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginPage from './login/page';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the '/login' path on startup
    router.push('/login');
  }, [router]);

  return null;
}
