import styled from 'styled-components';


export const ScoreBoard = styled.div`
    width:600px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius: 20px;
    border: 3px solid hsl(217, 16%, 45%);
    padding:25px 30px;

    .score-box {
        background-color:#fff;
        min-width:130px;
        border-radius:10px;
        padding:20px;

        .score-label {
            color: hsl(229, 64%, 46%);
            font-weight:700;
            text-transform:uppercase;
            font-size:16px;
            letter-spacing:1.6px;
            margin:0;
        }

        .score-number {
            color: hsl(229, 25%, 31%);
            margin:0;
            font-size:50px;
            font-weight:700;
        }
    }
`;