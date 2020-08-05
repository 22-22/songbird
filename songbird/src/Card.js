import React from 'react';
import defaultImg from './assets/defaultImg.jpg';
import Player from './Player';
import './App.scss';

class Card extends React.Component {
    render() {
        let cardAnswer = this.props.isStarted ? (
            <>
                <div className="card-body card-answer__body">
                    <img className="card-image" src={this.props.attemptData.image} alt="bird"></img>
                    <div className="card-info">
                        <h4 className="card-title">{this.props.attemptData.name}</h4>
                        <p className="card-title">{this.props.attemptData.species}</p>
                        <Player audio={this.props.attemptData.audio}/>
                    </div>
                </div>
                <p className="card-description">{this.props.attemptData.description}</p>
            </>
        ) : (
                <div className="card-body">
                    <p className="card-text">Послушайте плеер. Выберите птицу из списка</p>
                </div>
            )
        let cardQuestion = (
            <div className="card-body card-question__body">
                <img className="card-image"
                    src={this.props.isGuessed ? this.props.correctData.image : defaultImg} alt='bird'>
                </img>
                <div className="card-info">
                    <h4 className="card-title">{this.props.isGuessed ? this.props.correctData.name : '*****'}</h4>
                    <Player audio={this.props.correctData.audio}/>
                </div>
            </div>
        )
        let card = this.props.cardQuestion ? cardQuestion : cardAnswer;
        return (
            <div className={this.props.cardQuestion
                ? "card card-question" : "card card-answer"}>
                {card}
            </div>
        )
    }
}

export default Card;
