import React from 'react';

export default function Playing({options, playGame}) {

    return (
        <div>
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
        </div>
    )
}