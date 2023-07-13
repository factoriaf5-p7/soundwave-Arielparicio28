import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  
  
@media (max-width: 375px) {
  flex-direction: column;
  justify-content:center;
  height: auto;
  padding: 20px;
}
`; 
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  max-height: 80%;
  max-width: 80%;
`;

export function ImgDiscover() {
  return (
    <>
    <Container>
        <ImageContainer>
    <Image src="covers.jpg" alt="" />
    </ImageContainer>
    </Container>
    </>
  )
}

