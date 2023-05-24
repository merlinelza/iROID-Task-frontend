import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './dashboard.css';
import './main.css';
import SignupForm from './signup';
import SignInPage from './signin';
import Container from './dashboard';

const Myelement = (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignupForm />}></Route>
                <Route path="/Signin" element={<SignInPage />}></Route>
                <Route path="/dashboard" element={<Container />}></Route>
                <Route path="/" element={<SignupForm />}></Route>
            </Routes>
        </BrowserRouter>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Myelement);
