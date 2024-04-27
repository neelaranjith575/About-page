// PointCard.js

// import React from 'react';
import './PointCard.css'; // Import CSS file for styling

const PointCard = ({ id, title, description, active }) => {
    return (
        <div className={`py-16 text-green-50 border-green-50 font-sans border-b pointCard ${active ? 'active' : ''}`}>
            <h1 className='text-xl'>{id}. {title}</h1>
            <h2 className='text-md pt-5 text-justify'>&emsp;{description}</h2>
        </div>
    );
};

export default PointCard;
