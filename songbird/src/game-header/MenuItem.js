import React from 'react';
import '../index.scss';

export const MenuItem = ({ item, idx, gameRound }) => (
    <button
        type="button"
        className={gameRound === idx
            ? "btn header__btn header__btn-active"
            : "btn header__btn"}>
        {item}
    </button>
)
