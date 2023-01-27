import styled from 'styled-components';

export const Container = styled.header`
    width: 100vw;
    height: 5rem;
    background: rgba(4, 6, 17, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 998;

    > section {
        cursor: pointer;
        display: flex;
        gap: 2rem;
        &:last-child {
            gap: 1rem;
        }
        > nav {
            list-style: none;
            display: flex;
            gap: 1rem;
            a {
                font-size: 16px;
                position: relative;
                &:before {
                    content: '';
                    border-radius: 50px;
                    bottom: 0px;
                    position: absolute;
                    width: 0%;
                    height: 2px;
                    background: #fc566a;
                    transition: 0.3s;
                }
                &:hover {
                    color: #fc566a;
                    &:before {
                        width: 100%;
                    }
                }
            }
        }
        .mobile {
            display: none;
        }
        @media (max-width: 700px) {
            .mobile {
                display: block;
            }
            > nav {
                display: none;
            }
        }
    }
    @media (max-width: 700px) {
        padding: 14.5px 16px;
    }
`;
