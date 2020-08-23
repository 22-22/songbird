import React from 'react';
import '../index.scss';

export const Options = ({ currentData, guessStatus, handleClickOptions }) => {
    return (
        <ul className="list-group options">
            {currentData
                .map((name, idx) =>
                    <li
                        className="list-group-item d-flex align-items-center"
                        onClick={() => handleClickOptions(name)} key={idx}
                    >
                        <span
                            className={guessStatus[name] === 'initial'
                                ? "options__circle"
                                : guessStatus[name] === 'true'
                                    ? "options__circle options__circle-correct"
                                    : "options__circle options__circle-incorrect"}>
                        </span>
                        {name}
                    </li>
                )}
        </ul>
    )
}
