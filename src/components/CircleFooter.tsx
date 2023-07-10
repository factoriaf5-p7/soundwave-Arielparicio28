import { styled } from "styled-components";

const Container = styled.div`
display: flex;
justify-content: end;
align-items: flex-end;
padding-top: 50px;
`;

const CircleFoot = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: rgba(0, 0, 255, 0.1);

`;

export function CircleFooter() {
  return (
    <Container>
      <CircleFoot />
    </Container>
  );
}


