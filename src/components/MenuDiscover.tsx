import styled from "styled-components"

const Container = styled.menu`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap:30px;
  


@media (min-width: 900px) {
  flex-direction: rows;
  justify-content:center;
  height: auto;
  padding: 20px;
  text-align: center;
}
`; 
const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;     


export function MenuDiscover() {
  return (
    <>
    <Container>
        <ImageContainer>
          <img src="microphone.svg" alt=""/>
        </ImageContainer>
        <ImageContainer>
          <img src="albums.svg" alt="" />
        </ImageContainer>
        <ImageContainer>
          <img src="more.svg" alt="" />
        </ImageContainer>
      </Container>
    </>
  )
}

