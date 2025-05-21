import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router';

const Header: React.FC<{ children: React.ReactNode} > = ({ children}) => {
    
  const navigate = useNavigate();

  return (
    <div className='master'>
      <header className="header">
      <nav className="nav">
        <button onClick={() => navigate('/')}>Todo</button>
        <button onClick={() => navigate('/tree')}>Tree</button>
        <button onClick={() => navigate('/puzzle')}>Puzzle</button>
      </nav>
      
    </header>
    {children}
    </div>
    
  );
};

export default Header;