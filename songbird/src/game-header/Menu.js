import React from 'react';
import { MenuItem } from './MenuItem';
import '../index.scss';

const menuItemNames = ['Africa', 'USA', 'Asia', 'South America', 'Europe', 'Australia & New Zeland'];

export const Menu = ({ gameRound, isFinished }) => (
    <div className="btn-group menu" role="toolbar">
        {
            menuItemNames.map((name, idx) =>
                <MenuItem name={name} idx={idx} isFinished={isFinished}
                    key={idx} gameRound={gameRound} />)
        }
    </div>
)

