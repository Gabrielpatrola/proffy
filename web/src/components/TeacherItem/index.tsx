import React from "react";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/20545209?s=460&u=136672d7a98d12bedaad3805a3aa5a09798706fc&v=4"
          alt="Imagem do professor"
        />
        <div>
          <strong>Gabriel Augusto</strong>
          <span>Matéria</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel sollicitudin sapien. Cras sit amet efficitur nunc, nec iaculis dui.
        Nam consectetur eros egestas volutpat commodo. Morbi feugiat dui in
        massa mollis blandit vel non nunc. Maecenas laoreet tortor nec sem
        sollicitudin bibendum. Vestibulum
        <br /> <br />
        pellentesque magna ac tempor rhoncus. Maecenas cursus nisl et ante
        commodo ornare. Vivamus ullamcorper risus non eleifend posuere.
        Phasellus in egestas elit, at elementum nisl. Vivamus fringilla ac nunc
        et ultrices. Fusce luctus iaculis mi. Ut dignissim, justo sit amet
        pharetra luctus, lorem risus luctus nulla, ac eleifend odio nulla nec
        quam.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
