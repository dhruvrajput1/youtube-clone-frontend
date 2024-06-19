// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in by verifying the token
        const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('accessToken='));
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post('/api/v1/users/logout') // Adjust the endpoint as needed
            .catch((error) => {
                console.error(error);
            });
            setIsLoggedIn(false);
            console.log('Logout successful');
            navigate('/');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold">MyApp</Link>
                <div>
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mr-2">
                                Login
                            </Link>
                            <Link to="/register" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-900">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
