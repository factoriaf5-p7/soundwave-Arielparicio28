import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  position:absolute;
  inset: 10 10 10 10;

  @media (min-width: 900px) {
    display:flex;
    flex-direction: row;
    margin-left: 38rem;
    width: 300px;
    height: 300px;
    margin-bottom:5rem;
  
  }
  
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: rgba(0, 0, 255, 0.1);

  @media (min-width: 900px) {
    display:flex;
    flex-direction: row;
    margin-left: 38rem;
    width: 300px;
    height: 300px;
  
  }
  
`;

export function Circles() {
  return (
    <Container>
      <Circle />
    </Container>
  );
}
