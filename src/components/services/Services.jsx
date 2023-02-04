import React, { useState } from 'react';
import Service from '../service/Service';
import SiteAndSoftware from '../../assets/notebook.png';
import Cabeamento from '../../assets/Ethernet.png';
import DHCP from '../../assets/DHCP.png';
// import Sistemas from '../../assets/Implantacao.png';
// import Servidores from '../../assets/servidor.png';
// import RedeSemFio from '../../assets/router.png';
import './styles';
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCardsWraper,
    ServiceCard,
    ServiceDescriptionWrapper,
    ServiceDescription,
} from './styles';

const Services = () => {
    const [isOpen, setIsOpen] = useState('div1');

    const controlDiv1 = (value) => () => {
        setIsOpen(value ? 'div1' : '');
    };

    const controlDiv2 = () => {
        setIsOpen('div2');
    };

    const controlDiv3 = () => {
        setIsOpen('div3');
    };

    return (
        <ServicesContainer>
            <ServicesWrapper>
                <h1 className="text-center mb-5">Serviços</h1>
                <ServicesCardsWraper>
                    <ServiceCard>
                        <button className="open-card-button" onClick={controlDiv1(true)}>
                            <Service
                                img={SiteAndSoftware}
                                description="Desenvolvemos seu site ou software sob medida com as melhores tecnologias do mercado."
                                className={`div1 ${isOpen === 'div1' ? 'open' : ''}`}
                                title="Desenvolvimento de Sites e Softwares"
                            />
                        </button>
                    </ServiceCard>
                    <ServiceCard>
                        <button onClick={controlDiv2} className="open-card-button">
                            <Service
                                img={Cabeamento}
                                title="Serviços de Infraestrutura"
                                description="Instalamos e configuramos o cabeamento da sua empresa."
                                className={`div2 ${isOpen === 'div2' ? 'open' : ''}`}
                            />
                        </button>
                    </ServiceCard>
                    <ServiceCard>
                        <button onClick={controlDiv3} className="open-card-button">
                            <Service
                                img={DHCP}
                                title="Implantação de Sistemas"
                                description="Configuramos e gerenciamos o servidor DHCP da sua empresa."
                                className={`div3 ${isOpen === 'div3' ? 'open' : ''}`}
                            />
                        </button>
                    </ServiceCard>
                </ServicesCardsWraper>
                <ServiceDescriptionWrapper>
                    <ServiceDescription className={`div1 ${isOpen === 'div1' ? 'open' : ''}`}>
                        <div className="description-wrapper">
                            <h2>Fazemos sites e tararau</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloremque cum ad placeat
                                veniam maiores? Obcaecati, quaerat! Libero voluptas temporibus provident animi, deserunt
                                quae ea mollitia nisi at sit tenetur. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Maiores illo illum corrupti in ut. At quae laborum cumque necessitatibus odio
                                quas, illum facilis accusantium vel molestias totam neque tempore vero.
                            </p>
                            <button className="">Saiba maizi</button>
                        </div>
                    </ServiceDescription>
                    <ServiceDescription className={`div2 ${isOpen === 'div2' ? 'open' : ''}`}>
                        <div className="description-wrapper">
                            <h2>Fazemos cabeamento e tararau</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloremque cum ad placeat
                                veniam maiores? Obcaecati, quaerat! Libero voluptas temporibus provident animi, deserunt
                                quae ea mollitia nisi at sit tenetur. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Maiores illo illum corrupti in ut. At quae laborum cumque necessitatibus odio
                                quas, illum facilis accusantium vel molestias totam neque tempore vero.
                            </p>
                            <button className="">Saiba maizi</button>
                        </div>
                    </ServiceDescription>
                    <ServiceDescription className={`div3 ${isOpen === 'div3' ? 'open' : ''}`}>
                        <div className="description-wrapper">
                            <h2>Implantamos sistemas e tararau</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloremque cum ad placeat
                                veniam maiores? Obcaecati, quaerat! Libero voluptas temporibus provident animi, deserunt
                                quae ea mollitia nisi at sit tenetur. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Maiores illo illum corrupti in ut. At quae laborum cumque necessitatibus odio
                                quas, illum facilis accusantium vel molestias totam neque tempore vero.
                            </p>
                            <button className="">Saiba maizi</button>
                        </div>
                    </ServiceDescription>
                </ServiceDescriptionWrapper>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
