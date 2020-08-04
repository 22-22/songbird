import React from 'react';
import './Game.scss'

class CardAnswer extends React.Component {

    render() {
        let card = this.props.isStarted ? (
            <>
                <div className="card-body">
                    <img className="card-image" src={this.props.attemptData.image} alt="bird"></img>
                    <div>
                        <h4 className="card-title">{this.props.attemptData.name}</h4>
                        <p className="card-title">{this.props.attemptData.species}</p>
                        <audio controls>
                            <source src={this.props.attemptData.audio}></source>
                        </audio>
                    </div>
                </div>
                <p className="card-text">{this.props.attemptData.description}</p></>
        ) : (
                <div className="card-body">
                    <p className="card-text">Послушайте плеер. Выберите птицу из списка</p>
                </div>
            )
        return (
            <div className="card border-light card-answer">
                {card}
            </div>
        )
    }
}

export default CardAnswer;
