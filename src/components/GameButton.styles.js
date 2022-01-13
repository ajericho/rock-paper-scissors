import styled from 'styled-components';




export const GameButtonListItem = styled.li`
    list-style:none;
`;

export const GameButtonStyle = styled.button`
    margin:10px;
    border-radius:50%;
    border:0;
    background:${props =>
        props.buttonStyle === 'rock' ? "linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));" :
        props.buttonStyle === 'paper' ? "linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));" :
                "linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));"};
    padding:30px;
    box-shadow: 0px 12px 0px 0px ${props =>
        props.buttonStyle === 'rock' ? "#AF223C" :
        props.buttonStyle === 'paper' ? "#3A56DE" :
                "#D38D0F"};

    transition:ease-in-out .2s top;    


    &.playing {
        position:absolute;
        top:${props =>
            props.buttonStyle === 'rock' ? "65vh" :
            props.buttonStyle === 'paper' ? "40vh" : "40vh"};
        left:${props =>
            props.buttonStyle === 'rock' ? "44vw" :
            props.buttonStyle === 'paper' ? "34vw" : "53vw"};       
    }

    &.playing:hover {
        cursor:pointer;
        top:${props =>
        props.buttonStyle === 'rock' ? "66vh" :
        props.buttonStyle === 'paper' ? "41vh" : "41vh"};
        
    }


    div {
        background-color:#fff;
        background-size:contain;      
        height:120px;
        width:120px;
        border-radius:50%;
        box-shadow: inset 0px 10px 0px 0px #EDF0F7;
        display:flex;
        justify-content:center;
        align-items:center;
    }




`;