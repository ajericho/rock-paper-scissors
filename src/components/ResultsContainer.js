import styled from 'styled-components';


export const ResultsContainer = styled.div`
    padding-top:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    h4 {
        font-size:40px;
        text-transform:uppercase;
    }

    p {
        font-size: 25px;
        text-transform:uppercase;
    }

    button.play-again {
        background-color:#fff;
        padding:20px;
        text-transform:uppercase;
        color:hsl(229, 25%, 31%);
        font-family: 'Barlow Semi Condensed', sans-serif;
        border:0;
        border-radius:10px;
        font-size:25px;
        opacity:1;
        transition: ease-in-out .2s opacity;

    }

    button.play-again:hover {
        cursor:pointer;
        opacity:.9;
    }

`;