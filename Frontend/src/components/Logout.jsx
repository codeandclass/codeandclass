import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear auth token (or other relevant data)
    localStorage.removeItem('token'); // Adjust the key if different
    // Redirect to login
    navigate('/login');
  }, [navigate]);

  return null; // No UI needed during logout
};

export default Logout;