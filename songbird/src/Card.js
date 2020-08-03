import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
                <img src='https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg' alt='bird'></img>
                <div>Striz</div>
                <div>Apus apus</div>
                <audio controls>
                    <source src='https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'></source>
                </audio>
                <div>Birrrrd</div>
            </div>
        )
    }
}

export default Card;
