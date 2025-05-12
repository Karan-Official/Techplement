import '../CSS/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', email);
        navigate('/');
      }
    } catch (err) {
      setError(err.response.data.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
        <div className="auth-card">
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p className="error-text">{error}</p>}
            <button className="auth-button" onClick={handleLogin}>Login</button>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    </div>
  );
};

export default Login;
