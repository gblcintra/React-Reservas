import React, { useCallback }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve } from '../../store/modules/reserve/actions';
import { MdDelete } from 'react-icons/md'
import './style.scss'

export default function Reservas() {
  const dispatch = useDispatch()
  const reserves = useSelector(state => state.reserve)

  function handleRemove(id){
    console.log('click Remove', id)
    dispatch(removeReserve(id))
  }
  
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
          <span>Quantidade: {reserve.amount}</span>
          <button
            type="button"
            onClick={() => handleRemove(reserve.id)}
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