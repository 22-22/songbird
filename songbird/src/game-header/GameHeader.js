import React from 'react';
import '../index.scss';
import { Menu } from './Menu';
import { Logo } from './Logo';
import { Score } from './Score';

export const GameHeader = ({ points, gameRound }) => {
    return (
        <header className="header">
            <div className="header__top">
                <Logo />
                <Score points={points} />
            </div>
            <Menu gameRound={gameRound} />
        </header>
    )
}