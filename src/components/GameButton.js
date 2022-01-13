import React from 'react';
import { GameButtonListItem, GameButtonStyle } from './GameButton.styles';

import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'

export default function GameButton({ pick, playGame }) {

    const icon = pick === 'rock' ? rock : pick === 'paper' ? paper : scissors ;

    return (
        <GameButtonListItem key={pick}>
            <GameButtonStyle 
                className="playing"
                buttonStyle={pick}
                onClick={() => playGame(pick)}>
                    <div className={pick}>
                        <img src={icon} alt={pick} />
                    </div>
                
            </GameButtonStyle>
        </GameButtonListItem>
    )
}