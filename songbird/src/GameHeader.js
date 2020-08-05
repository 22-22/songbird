import React from 'react';
import './App.scss';

class GameHeader extends React.Component {
    renderButtons = () => {
        return ['1', '2', '3', '4', '5', '6']
            .map((item, idx) => <button type="button"
                className={this.props.gameRound === idx
                    ? "btn header__btn header__btn-active" : "btn header__btn"}>
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
                    <div className="header__top-score">
                        Score: <span>{this.props.points}</span></div>
                </div>
                <div className="btn-group" role="toolbar">
                    {this.renderButtons()}
                </div>
            </header>
        )
    }
}

export default GameHeader;
