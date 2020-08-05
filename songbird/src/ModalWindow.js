import React from 'react';
import './App.scss';

class ModalWindow extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <h2 className="modal-title">Congrats!</h2>
                        <div className="modal-body">
                            <p>You finished the quiz!</p>
                            <p>You got {this.props.points} out of {this.props.totalPoints} points!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this.props.playAgain}
                                className="btn btn-primary">Play Again</button>
                            {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalWindow;