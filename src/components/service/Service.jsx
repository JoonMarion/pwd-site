import React from 'react';
import { ServiceCard, CardBody } from './styles';

const Service = ({ img, title, description, className }) => {
    return (
        <ServiceCard className={`${className}`}>
            <CardBody>
                <div className="card-image-content">
                    <img src={img} alt={title} />
                </div>
                <div className="card-title-content">
                    <h3>{title}</h3>
                </div>
            </CardBody>
        </ServiceCard>
    );
};

export default Service;
