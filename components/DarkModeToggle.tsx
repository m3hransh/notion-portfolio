import React, { FC } from "react";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";
import styled from "styled-components";

interface DarkModeToggleProps {
  className?: string;
  chidlren?: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({
  isDarkMode,
  toggleDarkMode,
  className,
}) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault();
      toggleDarkMode();
    },
    [toggleDarkMode]
  );

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <div className={className}>
      {hasMounted ? (
        <Toggle>
          <a onClick={toggleDarkModeCb} title="Toggle dark mode">
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </Toggle>
      ) : null}
    </div>
  );
};

const Toggle = styled.div`
  font-size: 2em;
  transition: all 0.2s ease-out;
  color: ${({ theme }) =>
    theme.darkMode.value ? theme.dark.primary : theme.light.primary};
  &:hover {
    color: ${({ theme }) =>
      theme.darkMode.value ? theme.dark.secondary : theme.light.secondary};
    transform: scale(1.2);
  }
`;
export default DarkModeToggle;
