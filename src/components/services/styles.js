import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: auto;
    width: 100vw;

    display: flex;
    justify-content: center;

    background-color: #4e5161;
`;

export const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 3rem 0;
`;

export const ServicesCardsWraper = styled.div`
    width: 100%;
    display: flex;

    gap: 1rem;
`;

export const ServiceCard = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    .open-card-button {
        background: none;
        border: none;
    }
`;

export const ServiceDescriptionWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: rgb(39, 40, 48);
`;

export const ServiceDescription = styled.div`
    width: 780px;
    display: none;

    .description-wrapper {
        margin: 30px 0;
        padding: 0 30px;
    }
`;
