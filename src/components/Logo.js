import React from 'react';
import '../css/Logo.css';

const Logo = () => {
    return (
        <div className="logo-container">
            <div className="logo-img-div"><img className="logo" src="/cb-logo.png" alt="logo" /></div>
            <div className="logo-name-div">
                <div>My Name</div>
                <div>My Title</div>
            </div>
        </div>
    );
}

export default Logo;