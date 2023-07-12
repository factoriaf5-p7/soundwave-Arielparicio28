import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
margin: 10px;


& div { 
  display:flex;
  flex-direction: rows;
  align-items:center;
}

`;

const Logo = styled.img`

`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  margin:0;
  padding:0;
`;

const NavItem = styled.li`
  margin: 0 10px;
  font-weight: bold;
  color: #e5eafa;
  cursor: pointer;
  font-size: 15px;

  & a {
    text-decoration:none;
  }

  &:hover {
    color: #202027;
  }
`;
const NavSound = styled.li`
  margin: 0 10px;
  font-weight: bold;
  color: #ffff;
  font-size: 20px;
`;


export function NavBar() {
  return (
    <>
      <Container>
        <div>
        <Link to={"/"}>
        <Logo src="logo.png" alt="Logo de sonido" />
        </Link>
        <NavSound>SoundWave</NavSound>
        </div>
        <NavList>
          <NavItem>
            <Link to="/discover" style={{ color: "#e5eafa" }}>Discover</Link>
          </NavItem>
          <NavItem>
            <Link to="/join" style={{ color: "#e5eafa" }}>Join</Link>
          </NavItem>
        </NavList>
      </Container>
    </>
  );
}
