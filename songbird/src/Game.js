import React from 'react';
import GameHeader from './GameHeader';
import GameBody from './GameBody';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameStarted: false
        }
    }

    render() {
        return (
            <>
                <GameHeader />
                <GameBody />
            </>
        )
    }
}

export default Game;
