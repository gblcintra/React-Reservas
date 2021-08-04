import React from 'react';
import { useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md'
import './style.scss'

export default function Reservas() {
  const reserves = useSelector(state => state.reserve)
  console.log("🚀 ~ file: index.js ~ line 8 ~ Reservas ~ reserves", reserves)
  return (
    <div className="reservas">
      <h1 className="title">Voce solicitou {reserves.length} reserva</h1>
     {reserves.map(reserve => (
      <div className="reservas-box" key={reserve.id}>
          <img
            src={reserve.image}
            alt={reserve.title}
          ></img>
          <strong>{reserve.title}</strong>
          <span>Quantidade: 2</span>
          <button
            type="button"
            onClick={() => { }}
          ><MdDelete size={20} color="#000" />
          </button>
        </div>

     ))}

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