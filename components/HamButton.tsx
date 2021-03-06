import React, { FC } from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";

interface HamButtonProps {
  className?: string;
  chidlren?: React.ReactNode;
  active: boolean;
  setActive: (v: boolean) => void;
}

const HamButton: FC<HamButtonProps> = ({ active, setActive }) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  const handleClick = () => setActive(!active);
  // making sure the component doesn't prerender
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      {hasMounted ? (
        <Menu open={active} onClick={handleClick} htmlFor="navi-toggle">
          <Icon open={active} />
          <IconRound open={active} />
        </Menu>
      ) : null}
    </>
  );
};

const Icon = styled(AiOutlineMenu)<{ open: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  grid-column: 1;
  grid-row: 1;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) =>
    theme.darkMode?.value ? theme.dark.primary : theme.light.primary};
  opacity: ${(props) => (props.open ? "0" : "100%")};
`;

const IconRound = styled(AiOutlineMenuUnfold)<{ open: boolean }>`
  width: 100%;
  height: 100%;
  z-index: 1000;
  padding: 0.5rem;
  grid-column: 1;
  grid-row: 1;
  color: ${({ theme }) =>
    theme.darkMode.value ? theme.dark.primary : theme.light.primary};
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.open ? "100%" : "0")};
`;

const Menu = styled.label<{ open: boolean }>`
  position: fixed;
  display: grid;
  justify-content: center;
  top: 0rem;
  left: 0rem;
  height: var(--notion-header-height);
  cursor: pointer;
  z-index: 900;
  transition: all 0.2s ease-in;
  text-align: center;
  &:hover {
    ${Icon}, ${IconRound} {
      color: ${({ theme }) =>
        theme.darkMode.value ? theme.dark.secondary : theme.light.secondary};
      transform: scale(1.1);
    }
  }
`;

export default HamButton;
