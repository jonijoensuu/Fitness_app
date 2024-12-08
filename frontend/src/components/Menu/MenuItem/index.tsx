import React from 'react';

interface MenuItemProps {
  title: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick} role="button" tabIndex={0}>
      {title}
    </div>
  );
};

export default MenuItem;