/* eslint-disable jsx-a11y/no-redundant-roles */
import './CardContent.css';
import { ReactTypical } from '@deadcoder0904/react-typical';
import { CardContentContainer, TextContent, ImageContent, CardContentWrapper } from './styles';
import BackgroundCircles from '../../assets/circuit3.png';
import Server from '../../assets/server.png';

const CardContent = () => {
    return (
        <CardContentContainer>
            <CardContentWrapper>
                <h1 className="pwd-logo">&#91;&nbsp;PWD&nbsp;&#93;</h1>
                <TextContent>
                    <h1 className="pwd-title">
                        <span className="pwd-name ">&gt;&nbsp;pwd@desktop:&nbsp;&#47;&#36;&nbsp;</span>
                        <ReactTypical steps={['Serviços de TI', 3000]} loop={Infinity} wrapper="div" />
                        <span className="dot-animate">_</span>
                    </h1>
                    <h2 className="my-4">Empresa de tecnologia da informação</h2>
                    <h2>Soluções inteligentes para a estrutura interna e externa de TI da sua empresa</h2>
                </TextContent>
                <ImageContent>
                    <img src={BackgroundCircles} alt="Background Circles" className="background-circles" />
                    <img src={Server} alt="Server" className="server" />
                </ImageContent>
            </CardContentWrapper>
        </CardContentContainer>
    );
};

export default CardContent;
