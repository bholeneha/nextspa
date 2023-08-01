'use client';

import React, {useState} from 'react';
import HomeLayout from "../components/templates/home/home";
import LoginForm from '../components/organisms/loginform/loginform';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import './loginpage.scss';

interface LoginValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [hasError, setHasError] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (values: LoginValues) => {
    // console.log("Submitting...");
    // console.log(values);
    const signInResponse = await signIn('credentials', {email:values.email, password:values.password, redirect: false})
    // console.log(signInResponse)
    setHasError(!!signInResponse?.error);
    if (signInResponse?.ok) {
      router.push('/dashboard');
    }
  };

  return (
    <HomeLayout>
        <div className='login-form'>
          <h1>Log In</h1>
            <LoginForm onSubmit={handleSubmit} error={hasError} />
        </div>
    </HomeLayout>
  );
};

export default LoginPage;


