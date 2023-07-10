import styled from "styled-components";

const Container = styled.div`
  display: flex;
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
        <h4>
          Stream over 20 thousand songs <br />
          with one click
        </h4>
      </H4>
    </Container>
  );
}
