import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Headerbutton = styled(Button)`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
font-family: 'Inter', sans-serif;
&.MuiButton-root {
    padding: 7px 10px;
    min-width: 120px;
    text-align: center;
    border: 1px solid #31B655;
    background-color: #31B655;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    transition: all .4s ease;
    font-family: 'Inter', sans-serif;
},
&.MuiButton-root:hover{
    background-color: #fff;
        color: #31B655;
}
`;
