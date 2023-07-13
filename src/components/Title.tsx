import styled from "styled-components";


const Container = styled.div`
 
  justify-content: space-evenly;
  align-items: flex-start;
  
  @media (min-width:900px){
    display:flex;
    text-align:center;
  }
`;

const H1 = styled.h1`
  color: #ffff;
  font-size:50px;

`;

export function Title() {
  return (
    <Container>
      <H1>Feel The <br /> Music</H1>
    </Container>
  );
}



