import React from 'react';
import Menu from './MainMenu';

const HomePage: React.FC = () => {
  const handleLogExercise = () => {
    console.log('Navigating to Log Exercise page...');
  };

  const handleLogMeal = () => {
    console.log('Navigating to Log Meal page...');
  };

  const menuItems = [
    { title: 'Log an Exercise', onClick: handleLogExercise },
    { title: 'Log a Meal', onClick: handleLogMeal },
  ];

  return (
    <div className="home-page">
      <h1>Joni's Fitness App</h1>
      <Menu items={menuItems} />
    </div>
  );
};

export default HomePage;