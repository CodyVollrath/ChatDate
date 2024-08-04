import React, {MouseEvent} from 'react';
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
        return 
    }
    return (
        <div className="navbar">
            <a href="/">Home</a>
            <a href='/login'>Login</a>
            <a href='/' onClick={handleLogout}>Logout</a>
            <a href='/about'>About</a>
            <a href='/signup'>Signup</a>
        </div>
    );
}

export default NavBar;