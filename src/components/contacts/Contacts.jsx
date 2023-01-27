/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Contacts.css';
import { BiMailSend } from 'react-icons/bi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { SiTelegram } from 'react-icons/si';
import { FaMapPin } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';

const Contacts = () => {
    return (
        <>
            <div className="container" id="contacts">
                <div className="contacts-content">
                    <h1 className="content-title">Contatos</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="send-email">
                                <form
                                    action="https://formsubmit.co/marianojoao52@gmail.com"
                                    className="form"
                                    method="POST"
                                >
                                    <ul className="forms">
                                        <li className="form-content">
                                            <input
                                                className="input form-style"
                                                type="text"
                                                name="name"
                                                placeholder="Digite seu nome"
                                                required
                                            />
                                        </li>
                                        <li className="form-content">
                                            <input
                                                className="input form-style"
                                                type="text"
                                                name="email"
                                                placeholder="Digite um email válido"
                                                required
                                            />
                                        </li>
                                        <li className="form-content">
                                            <input
                                                type="text"
                                                name="_subject"
                                                className="input form-style"
                                                placeholder=" Digite o título da mensagem"
                                                required
                                            />
                                        </li>
                                        <li className="form-content">
                                            <textarea
                                                className="textarea form-style"
                                                name="message"
                                                placeholder="Digite sua mensagem"
                                                required
                                            />
                                        </li>
                                        <button className="button-40 send-mail-button" role="button" type="submit">
                                            <p className="mb-0">
                                                Enviar
                                                <BiMailSend
                                                    size={20}
                                                    className="margin-icon send-email-icon secondary"
                                                />
                                            </p>
                                        </button>
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contacts-info">
                                <h4 className="contact-content">Links</h4>
                                <div>
                                    <p className="contact-content link-hover">
                                        <AiOutlineWhatsApp size={19} />
                                        &nbsp;
                                        <a
                                            href="https://wa.me/5591992608732?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento%21"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="link-hover"
                                        >
                                            (91) 99260-8732
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <p className="contact-content link-hover">
                                        <GrMail size={19} />
                                        &nbsp;
                                        <a
                                            href="mailto:tecnologia.pwd@gmail.com?subject=Hello%20again"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="link-hover"
                                        >
                                            tecnologia.pwd@gmail.com
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <p className="contact-content link-hover">
                                        <SiTelegram size={19} />
                                        &nbsp;
                                        <a
                                            href="https://t.me/JoonMarion"
                                            className="link-hover"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            t.me/pwd.tecnologia
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <p className="contact-content d-flex align-items-center link-hover">
                                        <SiLinktree size={19} />
                                        &nbsp;
                                        <a
                                            href="https://linktr.ee/pwd_tec"
                                            className="link-hover"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Linktree
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="contact-content d-flex align-items-center">
                                        <FaMapPin size={19} />
                                        &nbsp;Localização
                                    </h3>
                                    <p>Castanhal - PA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="square-container">
                {' '}
                <div className="contacts-square"></div>
            </div>
        </>
    );
};

export default Contacts;
