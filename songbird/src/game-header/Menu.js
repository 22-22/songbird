import React from 'react';
import { MenuItem } from './MenuItem';
import '../index.scss';

const menuItemNames = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

export const Menu = ({ gameRound, isFinished }) => (
    <div className="btn-group" role="toolbar">
        {
            menuItemNames.map((name, idx) =>
                <MenuItem name={name} idx={idx} isFinished={isFinished}
                    key={idx} gameRound={gameRound} />)
        }
    </div>
)

