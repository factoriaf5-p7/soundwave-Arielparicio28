import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align:center;
  
`;

const H1 = styled.h2`
  color: #ffff;
  font-size:50px;
`;

export function DiscoverTitle() {
  return (
    <Container>
      <H1>Discover new <br />music</H1>
    </Container>
  )
}

