import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
height: 100vh;

`
const Title = styled.h1`
color: #ffff;
font-size:50px;

span {
    color: #FF1493;
  }
`

export function TitleJoin() {
  return (
    <>
    <Container>
   <Title>
    Join the <br /><span>fun.</span>
   </Title>
    </Container>
    </>
  )
}

