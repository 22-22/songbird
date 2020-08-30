import React from 'react';
import '../index.scss';

export const ButtonNext = ({ startNextRound, isGuessed }) => (
    <button type="button" onClick={startNextRound}
        className={isGuessed ? "btn btn-lg btn-block btn-active"
            : "btn btn-primary btn-lg btn-block"}>
        Next level
    </button>)

