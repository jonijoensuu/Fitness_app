import React from 'react';
import Menu from '../../components/Menu';

const HomePage: React.FC = () => {
  const menuItems = [
    { title: 'Log an Exercise', route: '/log-exercise' },
    { title: 'Log a Meal', route: '/log-meal' },
  ];

  return (
    <div className="home-page">
      <h1>Joni's Fitness App</h1>
      <Menu items={menuItems} />
    </div>
  );
};

export default HomePage;