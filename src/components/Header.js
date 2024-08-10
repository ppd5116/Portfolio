import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #282c34;
`;

const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export function Header() {
  return (
    <Nav>
      <NavLinkStyled to="/">About</NavLinkStyled>
      <NavLinkStyled to="/education">Education</NavLinkStyled>
      <NavLinkStyled to="/experience">Experience</NavLinkStyled>
      <NavLinkStyled to="/projects">Projects</NavLinkStyled>
      <NavLinkStyled to="/certifications">Certifications</NavLinkStyled>
      <NavLinkStyled to="/honors-awards">Honors & Awards</NavLinkStyled>
      <NavLinkStyled to="/contact">Contact</NavLinkStyled>
    </Nav>
  );
}
