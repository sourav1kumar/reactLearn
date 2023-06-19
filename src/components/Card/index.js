import React from "react";
import './card.css'

const Card = ({first_name, last_name, email, avatar}) => {
    return (
        <div className="card">
            <div className="img-container">
                <img src={avatar} alt="user-avatar"/>
            </div>
            <div className="info-container">
                <div className="card-name">{`${first_name} ${last_name}`}</div>
                <div className="card-email">{email}</div>
            </div>
        </div>
    );
};

export default Card;
