import React from 'react';
import './Game.scss'

class GameHeader extends React.Component {
    renderButtons = () => {
        return ['1', '2', '3', '4', '5', '6']
            .map((item, idx) => <button type="button"
                className={this.props.gameRound === idx ? "btn btn-secondary active" : "btn btn-secondary"}>
                {item}</button>)
    }

    render() {
        return (
            <header className="header">
                <div className="header__top">
                    <h1 className="logo">
                        <span className="logo-light">Song</span>
                        <span className="logo-dark">Bird</span>
                    </h1>
                    <div>Score: <span>{this.props.points}</span></div>
                </div>
                <div className="btn-group mr-2" role="toolbar">
                    {this.renderButtons()}
                    {/* <button type="button" className="btn btn-secondary">1</button>
                    <button type="button" className="btn btn-secondary">2</button>
                    <button type="button" className="btn btn-secondary">3</button>
                    <button type="button" className="btn btn-secondary">4</button>
                    <button type="button" className="btn btn-secondary">5</button>
                    <button type="button" className="btn btn-secondary">6</button> */}
                </div>
            </header>
        )
    }
}

export default GameHeader;
