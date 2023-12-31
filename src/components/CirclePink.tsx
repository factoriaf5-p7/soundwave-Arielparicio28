import {styled} from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
padding-top: 50px;

`
const Circle2 = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
background-color: rgba(188, 58, 128, 0.1)
;

@media (min-width: 900px) {
    display:flex;
    flex-direction: row;
    margin-left: 20rem;
    width: 250px;
    height: 250px;
  }


`
export function CirclePink() {
  return (
    <Container>
     <Circle2/>
     </Container>
  )
}

