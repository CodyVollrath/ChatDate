import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/store';
import {User} from '../models/Interfaces';
import { loginUser } from '../api/requests';
import { useNavigate } from 'react-router-dom';

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      loginUser(username, password).then(user => {
        dispatch(login(user));
        return navigate('/');
    }).catch(err => {
        alert(err.message);
      });
    };
  
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  

export default LoginPage;