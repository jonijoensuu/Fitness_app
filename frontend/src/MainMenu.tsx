import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

interface MenuItemData {
  title: string;
  onClick: () => void;
}

interface MenuProps {
  items: MenuItemData[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className="menu-container">
      {items.map((item, index) => (
        <MenuItem key={index} title={item.title} onClick={item.onClick} />
      ))}
    </div>
  );
};

export default Menu;