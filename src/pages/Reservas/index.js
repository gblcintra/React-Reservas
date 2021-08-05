import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateAmountReserve } from '../../store/modules/reserve/actions';
import { MdAddCircle, MdDelete, MdRemoveCircle } from 'react-icons/md'
import './style.scss'

export default function Reservas() {
  const dispatch = useDispatch()
  const reserves = useSelector(state => state.reserve)

  //Função para remover a reserva usando o redux
  function handleRemove(id) {
    console.log('click Remove', id)
    dispatch(removeReserve(id))
  }

  //Função para remover a quantidade da reserva usando o redux
  function decrementAmount(trip) {
    console.log("🚀 ~ file: index.js ~ line 17 ~ decrementAmount ~ trip", trip)
    dispatch(updateAmountReserve( trip.id, trip.amount -1 ))

  }

  //Função para adiciona a quantidade da reserva usando o redux
  function incrementAmount(trip) {
    console.log("🚀 ~ file: index.js ~ line 21 ~ incrementAmount ~ trip", trip)
    dispatch(updateAmountReserve(trip.id, trip.amount +1 ))
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

          <div className="amount">
            <button
              type="button"
              onClick={() => decrementAmount(reserve)}
            >
              <MdRemoveCircle size={25} color="#191919" />
            </button>


            <input type="text" readOnly value={reserve.amount} />


            <button
              type="button"
              onClick={() => incrementAmount(reserve)}
            >
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => handleRemove(reserve.id)}
          ><MdDelete size={20} color="#191919" />
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