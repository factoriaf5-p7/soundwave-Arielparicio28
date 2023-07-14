import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  
`;

const H1 = styled.h1`
  color: #ffff;
  font-size:10 rem;
`;

export function TitleDiscover() {
  return (
    <Container>
    <H1>Discover new <br /> Music</H1>
  </Container>
  )
}

