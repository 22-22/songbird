import React from 'react';
import '../index.scss';

export const Score = ({ points }) => (
    <div className="header__top-score">
        Score: <span>{points}</span>
    </div>
)