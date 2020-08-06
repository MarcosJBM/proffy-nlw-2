import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/67931411?s=400&u=e3c24342e72d189eb67a83305d3ef34562544e70&v=4"
          alt="Marcos Botene"
        />
        <div>
          <strong>Marcos Botene</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br />
        <br />
        Entusiasta das melhores tecnologias de quimica avançada.Entusiasta das
        melhores tecnologias de quimica avançada.Entusiasta das melhores
        tecnologias de quimica avançada.Entusiasta das melhores tecnologias de
        quimica avançada.Entusiasta das melhores tecnologias de quimica
        avançada.
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
  );
};

export default TeacherItem;
