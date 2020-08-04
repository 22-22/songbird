import React from 'react';
import './Game.scss'

class CardQuestion extends React.Component {

    render() {
        let card = this.props.isGuessed ? (
            <>
                <div className="card-body">
                    <img className="card-image" src={this.props.correctData.image} alt='bird'></img>
                    <div>
                        <h4 className="card-title">{this.props.correctData.name}</h4>
                        <audio controls>
                            <source src={this.props.correctData.audio}></source>
                        </audio>
                    </div>
                </div>
                </>
        ) : (
                <div className="card-body"> ***
                   <audio controls>
                            <source src={this.props.correctData.audio}></source>
                        </audio>
                </div>
            )
        return (
            <div className="card border-light card-question">
                {card}
            </div>
        )
    }
}

export default CardQuestion;
