import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
display:flex;
justify-content: center;
align-items: center;
width: 150px;
height: 50px;
background: #1762a7;
color: #fff;
font-size: 16px;
border: none;
border-radius: 10px;
cursor: pointer;

&:hover{
   color: #2180d8;
}
`

interface ButtonJoinProps {
    text: string;
  }
  

export function ButtonJoin({ text}: ButtonJoinProps) {
  return (
   
   <Link to="/join">
    <Button>{text}</Button>
    </Link>
    
  )
}

