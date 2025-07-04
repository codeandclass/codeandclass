import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) return <Navigate to="/login" replace />;

    try {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();
        return isExpired ? <Navigate to="/login" replace /> : children;
    } catch (e) {
        return <Navigate to="/login" replace />;
    }
};

export default PrivateRoute;