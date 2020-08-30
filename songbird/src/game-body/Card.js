import React from 'react';
import defaultImg from '../assets/defaultImg.JPG';
import Player from './Player';
import '../index.scss';

export const Card = ({ isStarted, isGuessed, attemptData, correctData, cardType }) => {
    let cardAnswer = isStarted ? (
        <>
            <div className="card-body card-answer__body">
                <img className="card-image" src={attemptData.image} alt="bird"></img>
                <div className="card-info">
                    <h4 className="card-title">{attemptData.name}</h4>
                    <h5 className="card-title">{attemptData.species}</h5>
                    <Player audio={attemptData.audio} />
                </div>
            </div>
            <p className="card-description-sound"><em>{attemptData.descriptionSound}</em></p>
            <p className="card-description">{attemptData.description}</p>
        </>
    ) : (
            <div className="card-body">
                <p className="card-text">Послушайте плеер. Выберите птицу из списка</p>
            </div>
        )

    let cardQuestion = (
        <div className="card-body card-question__body">
            <img className="card-image"
                src={isGuessed ? correctData.image : defaultImg} alt='bird'/>
            <div className="card-info">
                <h4 className="card-title card-question__title">{isGuessed ? correctData.name : '*****'}</h4>
                <Player isGuessed={isGuessed} audio={correctData.audio} />
            </div>
        </div>
    )

    return (
        cardType === 'cardQuestion'
            ? (
                <div className={"card card-question"}>
                    {cardQuestion}
                </div>
            ) : (
                <div className={"card card-answer"}>
                    {cardAnswer}
                </div>
            )
    )
}