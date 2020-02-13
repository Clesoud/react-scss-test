import React from 'react';
import Logo from './Logo';
import '../css/Header.css';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <div>Some more cool stuff</div>
            <div>A little something extra</div>
        </div>
    );
}

export default Header;