import React from 'react';
import { GameHeader } from './game-header/GameHeader';
import { Card } from './game-body/Card';
import { Options } from './game-body/Options';
import { ModalWindow } from './game-body/ModalWindow';
import { ButtonNext } from './game-body/ButtonNext';
import data from './Data';
import correctSound from './assets/correct.mp3';
import incorrectSound from './assets/incorrect.mp3';
import './index.scss';

const maxPoint = data[0].length - 1;
const totalPoints = data.length * maxPoint;

class Game extends React.Component {
    constructor(props) {
        super(props);
        const randomNumber = this.getRandomNumber();
        const gameRound = 0;
        const guessStatus = this.createGuessStatusArray(gameRound);
        this.state = {
            isStarted: false,
            isFinished: false,
            isGuessed: false,
            gameRound,
            guessAttempts: 0,
            points: 0,
            attemptData: [],
            correctData: data[gameRound][randomNumber],
            guessStatus
        }
        this.initialState = this.state
    }

    getRandomNumber = () => {
        return Math.floor(Math.random() * data.length);
    }

    filterAttemptData = (value) => {
        return data
            .find((_, idx) => idx === this.state.gameRound)
            .find(data => data.name === value)
    }

    playSound = (src) => {
        const audio = new Audio(src);
        audio.play();
    }

    checkIfCorrect = (attemptName) => {
        let { isGuessed, correctData, guessAttempts, points, guessStatus } = this.state;
        if (!isGuessed) {
            if (attemptName === correctData.name) {
                this.playSound(correctSound);
                const newPoints = (guessAttempts <= maxPoint)
                    ? points + (maxPoint - guessAttempts) : points;
                this.setState({
                    isStarted: true,
                    isGuessed: true,
                    points: newPoints,
                    guessStatus: { ...guessStatus, [attemptName]: 'true' },
                });
            } else {
                this.playSound(incorrectSound);
                if (guessStatus[attemptName] !== 'false') {
                    this.setState({
                        isStarted: true,
                        guessAttempts: guessAttempts + 1,
                        guessStatus: { ...guessStatus, [attemptName]: 'false' },
                    });
                }
            }
        }
    }
    
    handleClickOptions = (attemptName) => {
        let attemptData = this.filterAttemptData(attemptName);
        this.setState({
            attemptData,
        }, this.checkIfCorrect(attemptName))
    }

    createGuessStatusArray = (round) => {
        const birdNames = data[round].map(bird => bird.name)
        let guessStatus = {};
        for (let key of birdNames) {
            guessStatus[key] = 'initial';
        }
        return guessStatus;
    }

    startNextRound = () => {
        const { isGuessed, gameRound } = this.state;
        if (isGuessed) {
            const newRound = gameRound + 1;
            if (newRound >= data.length) {
                this.setState({ isFinished: true })
            } else {
                const randomNumber = this.getRandomNumber();
                const guessStatus = this.createGuessStatusArray(newRound);
                this.setState({
                    gameRound: newRound,
                    isStarted: false,
                    isGuessed: false,
                    guessAttempts: 0,
                    attemptData: [],
                    correctData: data[newRound][randomNumber],
                    guessStatus,
                })
            }
        }
    }

    playAgain = () => {
        this.setState(this.initialState)
    }

    render() {
        let { isFinished, points, gameRound, correctData,
            attemptData, isGuessed, guessStatus, isStarted } = this.state;
        let currentData = data[gameRound].map(data => data.name);
        return (
            <>
                <GameHeader gameRound={gameRound} points={points} isFinished={isFinished} />
                {isFinished ||
                    (<main className="quiz">
                        <Card
                            data={data} cardType="cardQuestion"
                            gameRound={gameRound} correctData={correctData}
                            isGuessed={isGuessed}
                        />
                        <div className="quiz__answer">
                            <Options
                                handleClickOptions={this.handleClickOptions}
                                currentData={currentData} guessStatus={guessStatus}
                            />
                            <Card cardType="cardAnswer"
                                gameRound={gameRound} attemptData={attemptData}
                                correctData={correctData} isStarted={isStarted}
                            />
                        </div>
                        <ButtonNext
                            isGuessed={isGuessed}
                            startNextRound={this.startNextRound}
                        />
                    </main>)}
                {isFinished &&
                    <ModalWindow
                        points={points} totalPoints={totalPoints}
                        playAgain={this.playAgain}
                    />}
            </>
        )
    }
}

export default Game;
