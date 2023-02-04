import React from 'react';
import { Container } from './styles';
import { RiMenu3Fill } from 'react-icons/ri';

export function Navbar({ setMenuIsVisible }) {
    return (
        <Container>
            <section>
                <nav className="ms-3 navbar-content">
                    <a href="#home" className="mx-4">
                        Início
                    </a>
                    <a href="#services" className="mx-4">
                        Serviços
                    </a>
                    <a href="/" className="mx-4">
                        Sobre
                    </a>
                    <a href="#contacts" className="mx-4">
                        Contatos
                    </a>
                </nav>
                <section>
                    <RiMenu3Fill size={30} onClick={() => setMenuIsVisible(true)} className="mobile secondary" />
                </section>
            </section>
        </Container>
    );
}
