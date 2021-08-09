import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import logo from '../images/eart.png';

const StartPage = () => {
  const [values, handleInputChange] = useForm({ name: '' });

  const { name } = values;

  const history = useHistory();

  const nameUser = localStorage.getItem('nombre')
    ? localStorage.getItem('nombre')
    : null;

  const [showForm, setshowForm] = useState(nameUser ? true : false);

  const handleSubmitName = (event) => {
    event.preventDefault();
    if (name && name.length > 0) {
      localStorage.setItem('nombre', name);
      handleStart();
    }
  };

  const handleChangeName = () => {
    localStorage.removeItem('nombre');
    setshowForm(false);
  };

  const handleStart = () => {
    history.push('/level');
  };

  return (
    <>
      <img
        className='profile__logo animated pulse slower infinite'
        src={logo}
        alt='logo-earth'
        width='100'
        height='100'
      />
      <h1 className='profile__h1 animated fadeIn'>
        ¿Cuánto sabes de . . . <br /> Capitales mundiales? 🤔
      </h1>

      {!showForm ? (
        <form className='animated fadeIn'>
          <label htmlFor='name'>Tu nombre:</label>
          <input
            id='name'
            type='text'
            onChange={handleInputChange}
            name='name'
            className='profile__input'
          />
          <button onClick={handleSubmitName} className='profile__btn'>
            Empezar
          </button>
        </form>
      ) : (
        <>
          <h1 className='profile__h1 animated fadeIn'>{nameUser}</h1>

          <button onClick={handleChangeName} className='profile__btn_secondary animated fadeIn'>
            Cambiar nombre
          </button>

          <button onClick={handleStart} className='profile__btn animated fadeIn'>
            Empezar
          </button>
        </>
      )}
    </>
  );
};

export default StartPage;
