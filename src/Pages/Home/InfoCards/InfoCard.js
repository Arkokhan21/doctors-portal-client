import React from 'react';

const InfoCard = ({ card }) => {

    const { name, description, icon, bgColor } = card

    return (
        <div className={`card lg:card-side ${bgColor} shadow-xl p-6 text-white`}>
            <figure><img src={icon} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;