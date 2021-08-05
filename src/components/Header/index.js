import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //Responsavel por conectar o redux com os reduces
import { loadReserve } from '../../store/modules/reserve/actions';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.scss'

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length)
  const dispatch = useDispatch();

  useEffect(() => {
    const reserveLocalStorage = JSON.parse(localStorage.getItem('reserve'));
    if (reserveLocalStorage) {
      reserveLocalStorage.map(element => {
        dispatch(loadReserve(element));
      });
    }
  }, [])

  return (
    <header className="container">

      <Link to="/">
        <img className="logo" src={logo} alt="Logo Projeto" />
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
      </Link>

    </header>
  );
}