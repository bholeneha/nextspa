import React from 'react';
import HomeLayout from '../components/templates/home/home';

interface DashboardData {
}

const Dashboard: React.FC = () => {

  return (
    <HomeLayout>
      <h1>Welcome User</h1>
    </HomeLayout>
  );
};

export default Dashboard;
