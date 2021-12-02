import React, { FC } from "react";
import styled from "styled-components";

interface NavigationProps {
  className?: string;
  chidlren?: React.ReactNode;
  active: boolean;
}

const NavBackground = styled.div<{ clicked: boolean }>`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  z-index: 300;
  background-image: radial-gradient(var(--fg-color), var(--fg-color-3));
  height: 6rem;
  width: 6rem;
  border-radius: 50%;

  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};

  transition: all 1s ease-in-out;
`;

const Navigation: FC<NavigationProps> = ({ active }) => {
  return (
    <div>
      <NavBackground clicked={active}></NavBackground>
    </div>
  );
};

export default Navigation;
