import { ButtonJoin } from "../components/ButtonJoin";
import { CircleFooter } from "../components/CircleFooter";
import { CirclePink } from "../components/CirclePink";
import { Circles } from "../components/Circles";
import { Description } from "../components/Description";
import { ImageHero } from "../components/ImageHero";
import { Title } from "../components/Title";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
`;
const Home = styled.div`
  display: flex;
`;

export function HomePage() {
  return (
    <Home>
      <Circles />
      <CirclePink />
      <ImageHero />
      <Container>
        <Title />
        <Description />
        <ButtonJoin text={"Join Now"} />
      </Container>
      <CircleFooter />
    </Home>
  );
}
