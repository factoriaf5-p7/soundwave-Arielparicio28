import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.nav`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 100px;


@media (max-width: 375px) {
  flex-direction: column;
  justify-content:center;
  height: auto;
  padding: 20px;
  text-align: center;
}
`;

const Logo = styled.img`

  height: auto; 
  max-width: 100%;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin:0;
  padding:0;
`;

const NavItem = styled.li`
  margin: 0 10px;
  font-weight: bold;
  color: #e5eafa;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    color: #202027;
  }
`;
const NavSound = styled.li`
  margin: 0 10px;
  font-weight: bold;
  color: #ffff;
  font-size: 30px;
`;

export function NavBar() {
  return (
    <>
      <Container>
        <Link to={"/"}>
        <Logo src="logo.png" alt="Logo de sonido" />
        </Link>
        <NavList>
          <NavSound>SoundWave</NavSound>
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
