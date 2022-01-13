import React, { useState, useRef } from 'react';
import Results from '../components/Results';
import Playing from '../components/Playing';
import { ScoreBoard } from './Scoreboard.styles';

import logo from '../images/logo.svg'

export default function Game() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [isResults, setIsResults] = useState(false);

    const winner = useRef(null)
    const score = useRef(0);


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
            return winner.current = 'Tie!'
        }
        else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')

        ) {
            score.current += 1;
            return winner.current = 'Player Wins!'

        }
        else {
            return winner.current = 'House Wins!'
        }
    }


    function playGame(val) {
        //set players option from onClick
        setPlayerChoice(val);
        //execute computers random choice function
        setComputerChoice(drawRandom());
        //route to result component 
        setIsResults(true);
    }


    return (
        <div>
            {console.log(score)}
            <ScoreBoard>
                <img src={logo} alt='Rock, Paper, Scissors Logo' />
                <div className="score-box">
                    <p className="score-label">Score</p>
                    <p className="score-number">{score.current}</p>
                </div>
            </ScoreBoard>

            {isResults === true ?
                <Results
                    playerChoice={playerChoice}
                    computerChoice={computerChoice}
                    setResults={setIsResults}
                    winner={determineWinner()} />
                :
                <Playing options={options} playGame={playGame} />
            }
        </div>
    )
}