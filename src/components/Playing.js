import React from 'react';
import GameButton from './GameButton';

export default function Playing({options, playGame}) {

    return (
        <div>
           <ul>
                {options.map(pick => (
                    <GameButton pick={pick} playGame={playGame} />

                ))}
            </ul>
        </div>
    )
}