/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from './styles';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
        <Container isVisible={menuIsVisible}>
            <IoClose className="secondary" size={45} onClick={() => setMenuIsVisible(false)} />
            <nav className="content-subtitle">
                <a href="/" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Início
                </a>

                <a href="/" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Serviços
                </a>

                <a href="/" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Sobre
                </a>

                <a href="/" className="secondary" onClick={() => setMenuIsVisible(false)}>
                    Contatos
                </a>
            </nav>
        </Container>
    );
}
