import React from 'react';
import GameHeader from './GameHeader';
import Card from './Card';
import Options from './Options';
import ModalWindow from './ModalWindow';
import data from './Data';
import correctSound from './assets/correct.mp3';
import incorrectSound from './assets/incorrect.mp3';
import './App.scss';

const maxPoint = data[0].length - 1;
const totalPoints = data.length * maxPoint;
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            isFinished: false,
            isGuessed: false,
            gameRound: 0,
            guessAttempts: 0,
            points: 0,
            attemptData: [],
            correctData: [],
        }
    }

    componentDidMount = () => {
        const randomNumber = this.getRandomNumber();
        this.setState({ correctData: data[this.state.gameRound][randomNumber] });
    }

    getRandomNumber = () => {
        return Math.floor(Math.random() * data.length);
    }

    filterAttemptData = (value) => {
        return data
            .find((data, idx) => idx === this.state.gameRound)
            .find(data => data.name === value)
    }

    playSound = (src) => {
        const audio = new Audio(src);
        audio.play();
    }

    checkIfCorrect = () => {
        if (!this.state.isGuessed) {
            if (this.state.attemptData.name === this.state.correctData.name) {
                const newPoints = (this.state.guessAttempts <= maxPoint)
                    ? this.state.points + (maxPoint - this.state.guessAttempts) : this.state.points;
                this.setState({ isGuessed: true, points: newPoints });
                this.playSound(correctSound);
                if (this.state.gameRound === (data.length - 1)) {
                    this.setState({ isFinished: true })
                }
            } else {
                this.setState({ guessAttempts: this.state.guessAttempts + 1 });
                this.playSound(incorrectSound);
            }
        }
    }

    handleClickOptions = (value) => {
        let attemptData = this.filterAttemptData(value);
        this.setState({ attemptData, isStarted: true }, this.checkIfCorrect);
    }

    startNextRound = () => {
        const randomNumber = this.getRandomNumber();
        const newRound = this.state.gameRound + 1;
        if (this.state.isGuessed && newRound < data.length) {
            this.setState({
                gameRound: newRound,
                isStarted: false,
                isGuessed: false,
                guessAttempts: 0,
                attemptData: [],
                correctData: data[newRound][randomNumber],
            })
        }
    }

    playAgain = () => {
        const randomNumber = this.getRandomNumber();
        const gameRound = 0;
        this.setState({
            isStarted: false,
            isFinished: false,
            isGuessed: false,
            gameRound,
            guessAttempts: 0,
            points: 0,
            attemptData: [],
            correctData: data[gameRound][randomNumber],
        })
    }

    render() {
        let gameBody;
        if (this.state.isFinished) {
            gameBody = <ModalWindow playAgain={this.playAgain}
                points={this.state.points} totalPoints={totalPoints}
            />
        } else {
            gameBody = (<main className="quiz">
                <Card data={data} cardQuestion={"cardQuestion"}
                    gameRound={this.state.gameRound}
                    correctData={this.state.correctData}
                    isGuessed={this.state.isGuessed}
                />
                <div className="quiz__answer">
                    <Options
                        handleClickOptions={this.handleClickOptions}
                        data={data} gameRound={this.state.gameRound}
                        isStarted={this.state.isStarted} isGuessed={this.state.isGuessed}
                        correctData={this.state.correctData}
                        attemptData={this.state.attemptData}
                    />
                    <Card cardAnswer={"cardAnswer"}
                        gameRound={this.state.gameRound}
                        attemptData={this.state.attemptData}
                        correctData={this.state.correctData}
                        isStarted={this.state.isStarted}
                    />
                </div>
                <button type="button" onClick={this.startNextRound}
                    className={this.state.isGuessed ? "btn btn-lg btn-block btn-active"
                        : "btn btn-primary btn-lg btn-block"}>Next level</button>
            </main>)
        }

        return (
            <>
                <GameHeader gameRound={this.state.gameRound}
                    points={this.state.points}
                />
                {gameBody}
            </>
        )
    }
}

export default Game;
