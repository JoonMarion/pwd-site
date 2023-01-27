import React from 'react';
import './Service.css';

const Service = ({ img, title, description }) => {
    return (
        <div class="card h-100">
            <div class="card-body">
                <div className="card-image-content">
                    <img class="rounded img-fluid card-image" src={img} alt={title} />
                </div>
                <div className="card-title-content">
                    <h5 class="card-title my-2">{title}</h5>
                </div>
                <div className="card-description-content">
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
