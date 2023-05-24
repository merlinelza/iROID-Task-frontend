/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './boxContainer.css';

const BoxContainer = ({ imageSrc, heading }) => {
    return (
        <div className="box-container">
            <img src={imageSrc} alt="Image" />
            <h2 className="heading">{heading}</h2> {}
        </div>
    );
};

export default BoxContainer;
