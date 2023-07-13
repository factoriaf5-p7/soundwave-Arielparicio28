import styled from "styled-components";

const Container = styled.div`
  justify-content: center;
  align-items: flex-start;
 
`;
const H4 = styled.h4`
  color: #e5eafa;
  margin-top: 0;
`;

export function Description() {
  return (
    <Container>
      <H4>
        
          Stream over 20 thousand songs <br />
          with one click
        
      </H4>
    </Container>
  );
}
