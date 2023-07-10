import {styled} from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
padding-top: 50px;
`;

const Circle = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
background-color: rgba(0, 0, 255, 0.1);

`;

export function Circles() {
  return (
  <Container>
   <Circle/>
   </Container>
   
  )
}
