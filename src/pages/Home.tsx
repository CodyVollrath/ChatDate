import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {UserState} from '../redux/store';

export interface IAboutPageProps {}

const HomePage: React.FunctionComponent<IAboutPageProps> = (props) => {
    const user = useSelector((state: UserState) => state.user);
    return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <p>Welcome, {user.firstName}!</p>
      ) : (
        <p>Please log in to see personalized content.</p>
      )}
    </div>
    );
}

export default HomePage;