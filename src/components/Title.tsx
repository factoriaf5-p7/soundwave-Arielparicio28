import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
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



