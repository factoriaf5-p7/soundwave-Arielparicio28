import { ButtonJoin } from "../components/ButtonJoin";
import { CircleFooter } from "../components/CircleFooter";
import { CirclePink } from "../components/CirclePink";
import { Circles } from "../components/Circles";
import { Description } from "../components/Description";
import { Title } from "../components/Title";


export function HomePage() {
  return (

      <>
    
    <Circles />
      <Title/>
     <Description/>
      <ButtonJoin text={"Join Now"} />
      <CirclePink/>
      <CircleFooter/>
      </>
  )
}

