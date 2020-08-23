import React from 'react';
import '../index.scss';

export const ModalWindow = ({ points, totalPoints, playAgain }) => {
    return (
        <div className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <h2 className="modal-title">Congrats!</h2>
                    <div className="modal-body">
                        {points === totalPoints ?
                            <p className="modal-victory">ABSOLUTE VICTORY!</p> :
                            <h4>You finished the game!</h4>
                        }
                        <h5>You got <strong>{points}</strong> out of <strong>{totalPoints}</strong> points!</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={playAgain}
                            className="btn btn-active">Play Again</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
