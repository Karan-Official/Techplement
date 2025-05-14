import { useState } from 'react';
import '../CSS/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://techplement-backend-jo0r.onrender.com/auth/signup', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        alert('Signup Successful! Please Login');
        navigate('/login');
      }
    } catch (err) {
      setError(err.response.data.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
        <div className="auth-card">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p className="error-text">{error}</p>}
            <button className="auth-button" onClick={handleSignup}>Sign Up</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  );
};

export default Signup;