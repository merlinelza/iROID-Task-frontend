import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import image1 from './images/twolines.png';
import image2 from './images/construction.png';
import image3 from './images/education.png';
import image4 from './images/consultancy.png';
import image5 from './images/logistics.png';
import image6 from './images/manufacturing.png';
import image7 from './images/tourism.png';
import image8 from './images/it.png';
import axios from 'axios';
import BoxContainer from './component/boxContainer';

const Container = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [username, setUsername] = useState('');
    useEffect(() => {
        if (location.state && location.state.name) {
            setUsername(location.state.name);
        }
    }, [location.state]);

    const handleLogout = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3030/user/logout'
            );
            console.log(response.data);

            navigate('/signin');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <div className="loginCnt">
                <p>
                    Hi, {username}
                    <span style={{ marginLeft: '10px' }}></span>{' '}
                    <button className="loginbtn" onClick={handleLogout}>
                        Logout
                    </button>
                    <span style={{ marginLeft: '5px' }}></span>{' '}
                </p>
            </div>
            <div className="input-field">
                <h2>Name Your Organization</h2>
                <input type="text" placeholder="Enter organization name" />
                <h2>Select your Organization Type below</h2>
            </div>
            <div className="container-row">
                <BoxContainer imageSrc={image1} />
                <BoxContainer imageSrc={image2} heading="construction" />
                <BoxContainer imageSrc={image3} heading="Education" />
                <BoxContainer imageSrc={image4} heading="Consultancy " />
            </div>
            <div className="container-row">
                <BoxContainer imageSrc={image5} heading="Logistics" />
                <BoxContainer imageSrc={image6} heading="Manufacturing" />
                <BoxContainer imageSrc={image7} heading="Tourism" />
                <BoxContainer imageSrc={image8} heading="IT" />
            </div>
            <div>
                <span style={{ marginLeft: '5px' }}></span>{' '}
                <button type="submit" className="text">
                    Next
                </button>
            </div>
            <span style={{ marginLeft: '5px' }}></span>{' '}
            <div class="scroll-container">
                <div class="box different-color"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
        </div>
    );
};
export default Container;
