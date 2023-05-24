import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './main.css';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:3030/user/signup',
                {
                    name,
                    email,
                    password,
                }
            );
            const responseData = response.data;
            console.log(responseData);

            if (responseData.success) {
                setEmail('');
                setPassword('');
            } else {
                setMessage(responseData.message);
            }
            navigate('/dashboard', { state: { name } });
        } catch (error) {
            if (error.response && error.response.data) {
                const errorData = error.response.data;
                console.log(errorData);
                setMessage(errorData.message);
            } else {
                console.error(error);
            }
        }
    };

    const handleLogin = () => {
        window.location.href = './signin';
    };

    return (
        <div>
            <div className="loginCnt">
                <p>
                    Already have an account?
                    <span style={{ marginLeft: '10px' }}></span>{' '}
                    <button className="loginbtn" onClick={handleLogin}>
                        Login
                    </button>
                </p>
            </div>
            <div className="main">
                <div className="semi"></div>
                <div className="rect">
                    <div>
                        <h1>Let's go!</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <p>Full Name</p>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-field"
                        />
                        <p>Email</p>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                        />
                        <p>Choose Password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                        <button type="submit" className="submit-button">
                            Sign Up
                        </button>
                    </form>
                    {message && <p>{message}</p>} {}
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
