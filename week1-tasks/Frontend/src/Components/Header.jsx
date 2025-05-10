import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from '/App_Logo.png';
import '../CSS/Header.css';
import {Toggle} from "../Header_Function";
import userIcon from '/user.png';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        Toggle();
        const theme = localStorage.getItem('theme');
        const token = localStorage.getItem('token');
        if(theme === 'dark') {
            setDarkMode(true);
            document.body.classList.remove('simple_hover');
        } else {
            setDarkMode(false);            
            document.body.classList.add('simple_hover');
        }

        if (token) {
            setIsLoggedIn(true);
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

    const SignUpPage = function() {
        navigate("/signup");
    };

    const LoginPage = function() {
        navigate("/login");
    };

    const Logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
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
                {isLoggedIn ? (
                    <div className="user_controls">
                        <img className="user_icon" src={userIcon} alt="User" />
                        <div className="logout_btn" onClick={Logout}>Logout</div>
                    </div>
                ) : (
                    <>
                        <div className="login_btn" onClick={LoginPage}>Login</div>
                        <div className="signup_btn" onClick={SignUpPage}>Sign Up</div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
