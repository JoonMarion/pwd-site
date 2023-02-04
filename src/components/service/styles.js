import styled from 'styled-components';

export const ServiceCard = styled.div`
    background: none;
    width: 250px !important;
    height: 280px !important;

    border-radius: 0.75rem;

    background: rgb(58, 60, 72);

    transition: 0.5s;

    &:hover {
        border: 1px solid #f9d27e;
        transform: scale(1.05);
        transition: 0.5s;
    }
`;

export const CardBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 1rem;

    .card-image-content{
        img {
            width: 80px;
            height: 80px;
        }
    }

    .card-title-content {
        h3 {
            font-size: 1.3rem;
        }
    }
`;
