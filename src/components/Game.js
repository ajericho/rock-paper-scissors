import React, { useState } from 'react';

export default function Game() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [gameCount, setGameCount] = useState(0);

    const options = ['rock', 'paper', 'scissors'];


    //function to randomly choose computers option
    function drawRandom() { 
        const draw = Math.floor(Math.random() * options.length);
        return options[draw];
      }

    function playGame(val) {
        //set players option
        setPlayerChoice(val);
        //execute computers random choice function

        setComputerChoice(drawRandom());
        //route to result screen 

        //add 1 to play count 
        setGameCount((gameCount) => (
            gameCount += 1
        ))
    }

    return (
        <div>
            <p>Game Count: {gameCount}</p>
            <ul>
                {options.map(pick => (
                    <li key={pick}>
                        <button
                            onClick={() => playGame(pick)}>
                            {pick}
                        </button>
                    </li>

                ))}
            </ul>
            <p>player choice: { playerChoice }</p>
            <p>computer choice: { computerChoice }</p>
        </div>
    )
}