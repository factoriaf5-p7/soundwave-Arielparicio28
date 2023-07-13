import styled from 'styled-components'

const ImageContainer = styled.div`
display: none;
background-position: 20px,50px;


@media (min-width: 900px) {
  display: block;
}
`
const Image = styled.img`
max-height: 100%;
max-width: 100%;

`


export function ImageHero() {
  return (
   <>

   <ImageContainer>  
     <Image src="landing-page-girl.png" alt="hero-img" />
   </ImageContainer>
   </>
  )
}

