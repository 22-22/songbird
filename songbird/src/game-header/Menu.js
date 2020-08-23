import React from 'react';
import { MenuItem } from './MenuItem';
import '../index.scss';

export const Menu = ({ gameRound }) => (
    <div className="btn-group" role="toolbar">
        {
            new Array(6)
                .fill()
                .map((_, idx) => idx + 1)
                .map((item, idx) =>
                    <MenuItem item={item} key={idx} gameRound={gameRound} />)
        }
    </div>
)

