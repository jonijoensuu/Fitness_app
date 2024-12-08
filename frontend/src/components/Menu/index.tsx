import React from 'react';
import MenuItem from './MenuItem';
import '../../menu.css';
import { useNavigate } from 'react-router-dom';

interface MenuProps {
  items: { title: string; route: string }[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          onClick={() => navigate(item.route)}
        />
      ))}
    </div>
  );
};

export default Menu;