import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../constants/theme';

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <a href='github.com/benxene'>GitHub</a>
    </Nav>
  );
}

const Nav = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: ${props => (props.isScrolled ? '2.2rem' : '3rem')} 6rem;
  background-color: ${({ isScrolled }) => (isScrolled ? colors.contrast.primary : colors.primary)};
  box-shadow: ${props => (props.isScrolled ? '0 3px .5rem rgba(0,0,0,.2)' : 'none')};
  display: flex;
  flex-direction: row-reverse;
  transition: all 0.3s;

  & > *:not(:first-child) {
    display: inline-block;
    margin-right: 1rem;
  }

  & > a {
    color: ${({ isScrolled }) => (isScrolled ? colors.secondary : colors.contrast.primary)};
    font-weight: 800;
    transition: color 0.2s;

    &:hover {
      color: ${({ isScrolled }) => (isScrolled ? colors.primary : colors.secondary)};
    }
  }

  @media (max-width: 50rem) {
    padding-right: 4rem;
    padding-left: 4rem;
  }
`;