import React from 'react';
import { MdDelete } from 'react-icons/md'
import './style.scss'

export default function Reservas() {
  return (
    <div className="reservas">
      <h1 className="title">Voce solicitou 1 reserva</h1>
      <div className="reservas-box">
        <img
          src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
          alt="Maceio"
        ></img>
        <strong>Viagem Maceio 7 Dias</strong>
        <span>Quantidade: 2</span>
        <button
          type="button"
          onClick={() => { }}
        ><MdDelete size={20} color="#000" />
        </button>
      </div>

      <footer>
        <button
          type="button"
        >
          Solicitar Reservas
        </button>
      </footer>
    </div>
  );
}