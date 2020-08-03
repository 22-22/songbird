import React from "react";
import "./GameHeader.scss"

class GameHeader extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__top">
                    <h1 className="logo">
                        <span className="logo-light">Song</span>
                        <span className="logo-dark">Bird</span>
                    </h1>
                    <div>Score: <span>0</span></div>
                </div>
                <div className="btn-group mr-2" role="toolbar">
                    <button type="button" className="btn btn-secondary">1</button>
                    <button type="button" className="btn btn-secondary">2</button>
                    <button type="button" className="btn btn-secondary">3</button>
                    <button type="button" className="btn btn-secondary">4</button>
                    <button type="button" className="btn btn-secondary">5</button>
                    <button type="button" className="btn btn-secondary">6</button>
                </div>
            </header>
        )
    }
}

export default GameHeader;
