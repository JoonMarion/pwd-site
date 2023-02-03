/* eslint-disable jsx-a11y/no-redundant-roles */
import './CardContent.css';
import { ReactTypical } from '@deadcoder0904/react-typical';

const CardContent = () => {
    return (
        <div className="main-content">
            <div className="main-content-content">
                <h1 className="pwd-title">
                    <span className="pwd-name">&gt;&nbsp;PWD:&nbsp;</span>
                    <ReactTypical steps={['Softwares especiais', 3000, 'para pessoas especiais', 3000]} wrapper="div" />
                    <span className="dot-animate">_</span>
                </h1>
                <h2 className="my-5">Empresa de tecnologia da informação</h2>
                <h2 className="">Soluções inteligentes para a estrutura interna e externa de TI da sua empresa</h2>
            </div>
        </div>
    );
};

export default CardContent;
