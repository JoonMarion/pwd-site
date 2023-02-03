/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Service from '../service/Service';
import SiteAndSoftware from '../../assets/notebook.png';
import Cabeamento from '../../assets/Ethernet.png';
import DHCP from '../../assets/DHCP.png';
import Sistemas from '../../assets/Implantacao.png';
import Servidores from '../../assets/servidor.png';
import RedeSemFio from '../../assets/router.png';
import './Services.css';

const Services = () => {
    return (
        <div className="services-content">
            <h1 className="content-title">Serviços</h1>
            <div class="services-wrapper">
                <Service
                    img={SiteAndSoftware}
                    title="Sites e Softwares"
                    description="Desenvolvemos seu site ou software sob medida com as melhores tecnologias do mercado."
                />
                <Service
                    img={Cabeamento}
                    title="Cabeamento Estruturado"
                    description="Instalamos e configuramos o cabeamento da sua empresa."
                />
                <Service
                    img={DHCP}
                    title="Servidor DHCP"
                    description="Configuramos e gerenciamos o servidor DHCP da sua empresa."
                />
                <Service
                    img={Sistemas}
                    title="Implantação de Sistemas"
                    description="Implantamos e configuramos os sistemas da sua empresa."
                />
                <Service
                    img={Servidores}
                    title="Instalação de Servidores"
                    description="Instalamos e configuramos servidores para a sua empresa."
                />
                <Service
                    img={RedeSemFio}
                    title="Projeto de Redes sem Fio"
                    description="Projetamos e configuramos redes sem fio para a sua empresa."
                />
            </div>
        </div>
    );
};

export default Services;
