import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
text-align: center;



`
const H4 = styled.h6`
 color: #e5eafa;
  margin-top: 0;
  font-size: 20px;
`



export function DescriptionDiscover() {
  return (
   <Container>
   <H4> <em>
    By joining you can benefit by listening to <br />
    the latest albums released.</em>

   </H4>

   </Container>
  )
}

