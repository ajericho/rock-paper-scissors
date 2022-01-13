import React from 'react';

export default function Results({playerChoice, computerChoice, setResults, winner}) {

    return (
        <div>
            <p>{winner}</p>
            <p>player choice: {playerChoice}</p>
            <p>computer choice: {computerChoice}</p>
            <button onClick={()=> setResults(false)}>Play Again</button>
        </div>
    )
}