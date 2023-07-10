import styled from "styled-components";

const Foot = styled.footer`
  display: flex;
  justify-content: center;
`;

const Header = styled.ul`
  display: flex;
  gap: 10px;
`;

const H5 = styled.li`
display: flex;
align-items: center;
gap: 5px;
color: white;
background-color: black;
padding: 5px 10px;
border-radius: 5px;
`;

const SocialIcon = styled.img`
  height: 16px;
`;

export function FooterDiscover() {
  return (
    <Foot>
      <Header>
        <H5>About us</H5>
        <H5>Contact</H5>
        <H5>
          <SocialIcon src="twitter.svg" alt="" />
          Twitter
        </H5>
        <H5>
          Facebook
          </H5>
      </Header>
    </Foot>
  );
}

