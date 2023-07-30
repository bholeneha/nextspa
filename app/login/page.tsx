'use client';

import React from "react";
import HomeLayout from "../components/templates/home/home";
import LoginForm from '../components/organisms/loginform/loginform';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
  onSubmit: () => void;
}

const LoginPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Submitting...");
    router.push('/dashboard');
  };

  return (
    <HomeLayout>
        <h1>Log In</h1>
        <p>Please log in to see your dashboard!</p>
        <LoginForm onSubmit={handleSubmit}/>
    </HomeLayout>
  );
};

export default LoginPage;


