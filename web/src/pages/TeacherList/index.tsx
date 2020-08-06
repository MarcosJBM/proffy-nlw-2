import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";

const TeacherList = () => {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="week-day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/67931411?s=400&u=e3c24342e72d189eb67a83305d3ef34562544e70&v=4" alt="Marcos Botene" />
                        <div>
                            <strong>Marcos Botene</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de quimica avançada.
                        <br /><br />
                        Entusiasta das melhores tecnologias de quimica avançada.Entusiasta das melhores tecnologias de quimica avançada.Entusiasta das melhores tecnologias de quimica avançada.Entusiasta das melhores tecnologias de quimica avançada.Entusiasta das melhores tecnologias de quimica avançada.
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    );
};

export default TeacherList;