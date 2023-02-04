import styled from 'styled-components';

export const CardContentContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: #656d96;
`;

export const CardContentWrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;

    .pwd-logo {
        position: absolute;
        top: 20%;
        font-weight: bold;
    }
`;

export const TextContent = styled.div`
    height: 100%;
    width: 50%;
    max-width: 700px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    z-index: 3;
    font-size: 1.5rem;

    text-shadow: 2px 0 2px #474b59;

    h1 {
        display: flex;
        font-size: 1.7rem;
    }

    h2 {
        font-size: 1.5rem;
    }
`;

export const ImageContent = styled.div`
    height: 100%;
    width: 50%;
    max-width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

    .background-circles {
        width: 160%;
        max-width: 700px;
        position: relative;
        bottom: -70px;
        transform: scaleX(-1);
        z-index: 1;
    }

    .server {
        width: 300px;
        position: absolute;
        transform: scaleX(-1);
        z-index: 2;
    }
`;
