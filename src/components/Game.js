import React, { useState, useEffect } from 'react';
import Results from '../components/Results';
import Playing from '../components/Playing';

export default function Game({ score }) {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [isResults, setIsResults] = useState(false);
    const [playerWins, setPlayerWins] = useState(null);


    const options = ['rock', 'paper', 'scissors'];


    //function to randomly choose computers option
    function drawRandom() {
        const draw = Math.floor(Math.random() * options.length);
        return options[draw];
    }

    //function to determine winner

    function determineWinner() {
        if (
            (playerChoice === 'rock' && computerChoice === 'rock') ||
            (playerChoice === 'paper' && computerChoice === 'paper') ||
            (playerChoice === 'scissors' && computerChoice === 'scissors')
        ) {
             setPlayerWins('Tie!')
        }
        else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
            
        ) {
             setPlayerWins('Player Wins!')
        }
        else {
             setPlayerWins('House Wins!')
        }
    }



    function playGame(val) {
        //set players option from onClick
        setPlayerChoice(val);
        //execute computers random choice function
        setComputerChoice(drawRandom());
        //increase score
        score();
        //route to result screen 
        setIsResults(true);
    }

     //determine winner
    useEffect(() => {
        determineWinner();
    });

    return (
        <div>
            {isResults === true ?
                <Results
                    playerChoice={playerChoice}
                    computerChoice={computerChoice}
                    setResults={setIsResults}
                    winner={playerWins} />
                :
                <Playing options={options} playGame={playGame} />
            }


        </div>
    )
}