import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from '/App_Logo.png';
import '../CSS/Header.css';
import {Toggle} from "../Header_Function";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        Toggle();
        const theme = localStorage.getItem('theme');
        if(theme === 'dark') {
            setDarkMode(true);
            document.body.classList.remove('simple_hover');
        } else {
            setDarkMode(false);            
            document.body.classList.add('simple_hover');
        }
    });

    const toggleTheme = () => {
        if (darkMode) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
    };

    const logoClick = () => {
        navigate('/');
    };

    return (
        <div className="header">
            <div className="logo" onClick={logoClick}>
                <img className="app_logo" src={appLogo} alt="App Logo"></img>
                <h2>Quotely</h2>
            </div>

            <div className="controls">
                <div onClick={toggleTheme} className="theme_toggle">
                    {darkMode ? '🌙' : '☀️'}
                </div>
                <div className="login_btn">Login</div>
                <div className="signup_btn">Sign Up</div>
            </div>
        </div>
    );
};

export default Header;
