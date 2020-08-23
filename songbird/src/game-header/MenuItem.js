import React from 'react';
import '../index.scss';

export const MenuItem = ({ name, idx, gameRound, isFinished }) => (
    <button
        type="button"
        className={gameRound === idx && !isFinished
            ? "btn header__btn header__btn-active"
            : "btn header__btn"}>
        {name}
    </button>
)
