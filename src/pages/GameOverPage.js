import React from 'react'
import iconMedal from '../assets/medal.png';
import fiesta from '../assets/fiesta.gif';
import { useHistory } from 'react-router-dom';

export const GameOverPage = () => {
    const nameUser = localStorage.getItem('nombre');

    const history = useHistory();

    const handleRedirection = () => {
        history.push('/quizz');
    }
    return (
        <div className="gameover">
            <h1 className="gameover__title">Felicidades { nameUser && nameUser}</h1>
            <div>
                <img src={iconMedal} class="gameover__icon" alt="medal-icon" />
                <h1 className="gameover__points">2500</h1>

                <h2 className="gameover__best">Mejor puntuación: 2800</h2>
            </div>
            <button onClick={handleRedirection} className='gameover__btn'>Otra vez</button>

            <img src={fiesta} className="gameover__icon-fiesta" alt="fiesta" />
        </div>
    )
}
