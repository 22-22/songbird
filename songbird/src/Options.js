import React from 'react';
import './App.scss';

class Options extends React.Component {

    renderOptions = () => {
        return this.props.data
            .find((data, idx) => idx === this.props.gameRound)
            .map(data =>
                <li
                    className="list-group-item d-flex align-items-center"
                    onClick={(evt) => this.props.handleClickOptions(evt.target.textContent)} key={data.id}>
                    <span className={(this.props.isGuessed && this.props.correctData.name === data.name)
                        ? "options__circle options__circle-correct"
                        : (!this.props.isGuessed && this.props.attemptData.name === data.name)
                            ? "options__circle options__circle-incorrect"
                            : "options__circle"}></span>
                    {data.name}
                </li>
            )
    }

    render() {
        return (
            <ul class="list-group options">
                {this.renderOptions()}
            </ul>
        )
    }
}

export default Options;
