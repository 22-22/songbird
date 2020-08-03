import React from 'react';
import Card from './Card';
import Options from './Options';
import Data from './Data';
import './GameBody.scss';

class GameBody extends React.Component {
    render() {
        return (
            <main className="main">
                <Card data={Data} />
                <div className="main__answer">
                    <Options />
                    <Card data={Data} />
                </div>
                <button>Next Level</button>
            </main>
        )
    }
}

export default GameBody;