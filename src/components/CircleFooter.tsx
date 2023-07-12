import { styled } from "styled-components";

const Container = styled.div`
display: flex;
justify-content: end;
align-items: flex-end;
padding-top: 50px;


`;

const CircleFoot = styled.div`
width: 300px;
height: 300px;
border-radius: 50%;
background-color: rgba(0, 0, 255, 0.1);
margin-right: -50px;

@media (min-width: 900px) {
    display:flex;
    flex-direction: row;
    margin-top: 20rem;
    margin-left: -5rem;
    width: 300px;
    height: 300px;
  }

`;

export function CircleFooter() {
  return (
    <Container>
      <CircleFoot />
    </Container>
  );
}


