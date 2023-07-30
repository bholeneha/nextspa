'use client';

import './loginpage.scss'
import React from "react";
import HomeLayout from "../../templates/home/home";
import LoginForm from '../../organisms/loginform/loginform';

const LoginPage: React.FC = () => {

  return (
    <HomeLayout>
        <h1>Log In</h1>
        <p>Please log in to see your dashboard!</p>
        <LoginForm onSubmit={() => {console.log("submitting...") }}/>
    </HomeLayout>
  );
};

export default LoginPage;


