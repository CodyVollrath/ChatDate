import axios from 'axios';
const API_BASE_URL = 'http://127.0.0.1:5000';
const jsonAPi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await jsonAPi.post('/auth', { email, password });
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;      
    }
}

export const logoutUser = async () => {
    try {
        const response = await jsonAPi.post('/logout');
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}