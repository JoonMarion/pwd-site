/* eslint-disable jsx-a11y/no-redundant-roles */
import './CardContent.css';

const CardContent = () => {
    return (
        <div className="main-content">
            <div className="main-content-content">
                <h1 className="pwd-title me-5 pe-4 mb-0 arrow-dot">
                    &gt;<span className="dot-animate">_</span>
                </h1>
                <h1 className="pwd-title">
                    [ <span className="pwd-name">PWD</span> ]
                </h1>
                <h2 className="my-5">Empresa de tecnologia da informação</h2>
                <h2 className="">Soluções inteligentes para a estrutura interna e externa de TI da sua empresa</h2>
            </div>
        </div>
    );
};

export default CardContent;
