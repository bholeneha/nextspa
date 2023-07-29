import './loginpage.scss'
import React from "react";
import HomeLayout from "../../templates/home/home";
import LoginForm from '../../organisms/loginform/loginform';

const DashboardPage: React.FC = () => {
  return (
    <HomeLayout>
        <h1>Log In</h1>
        <LoginForm />
    </HomeLayout>
  );
};

export default DashboardPage;


