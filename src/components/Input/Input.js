import React from 'react';
import './Input.css';
import lupa from './../../assets/lupa.svg';

const Input = ({ placeholder, type, handler }) => {
  const onChange = ({ target: { value }}) => {
    handler(value)
  }
  return (
    <span className="InputIcon">
      <img className="InputIcon-icon" alt="icone de buscar" src={lupa} />
      <input className="InputIcon-input" placeholder={placeholder} type={type} onChange={onChange} />
    </span>
  )
}

export default Input;
