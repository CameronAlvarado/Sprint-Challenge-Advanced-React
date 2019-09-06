import React from 'react';
import useDarkMode from '../hooks/useDarkMode.js';

function Header() {

    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return (
        <nav className="navbar">
            <h1>Women's World Cup Players</h1>
            <div onClick={toggleMode}
            className="dark-mode__toggle">
                <div
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    );
  };
  
  export default Header;