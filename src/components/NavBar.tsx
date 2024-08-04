import React, {MouseEvent, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../api/requests';
import { logout } from '../redux/store';
import { useDispatch } from 'react-redux';
export interface IAboutPageProps {}

const NavBar: React.FunctionComponent<IAboutPageProps> = (props) => {
    const dispatch = useDispatch();
    const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        logoutUser().then(() => {
            dispatch(logout());
            window.location.href = '/login';
        }).catch((err) => {
            alert(err.message);
        })
    }

    return (
        <div className="navbar">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''}>Signup</NavLink>
            <a href="/" onClick={handleLogout}>Logout</a>
        </div>
    );
}

export default NavBar;