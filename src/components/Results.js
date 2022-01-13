import React from 'react';
import { GameButtonStyle } from './GameButton.styles';

import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import { ResultsContainer } from './ResultsContainer';

export default function Results({ playerChoice, computerChoice, setResults, winner }) {

    const iconPlayer = playerChoice === 'rock' ? rock : playerChoice === 'paper' ? paper : scissors;
    const iconHouse = computerChoice === 'rock' ? rock : computerChoice === 'paper' ? paper : scissors;

    return (
        <div>

            <ResultsContainer>
                <div>
                    <p>You picked</p>
                    <GameButtonStyle
                        buttonStyle={playerChoice}
                    >
                        <div className={playerChoice}>
                            <img src={iconPlayer} alt={playerChoice} />
                        </div>
                    </GameButtonStyle>
                </div>
                <div>
                    <h4>{winner}</h4>
                    <button className="play-again" onClick={() => setResults(false)}>Play Again</button>
                </div>
                <div>
                    <p>house picked</p>
                    <GameButtonStyle
                        buttonStyle={computerChoice}
                    >
                        <div className={computerChoice}>
                            <img src={iconHouse} alt={computerChoice} />
                        </div>
                    </GameButtonStyle>
                </div>
            </ResultsContainer>

        </div>
    )
}