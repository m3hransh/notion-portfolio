import React, { FC, useContext } from "react";
import Image from "next/image";
import profilePic from "../public/profile.svg";
import SocialContacts from "./SocialContacts";
import styled, { ThemeContext } from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import { mq, theme } from "../styles/globalStyles";
interface SideBarProps {
  className?: string;
  chidlren?: React.ReactNode;
  active: boolean;
  isDarkMode: boolean;
}

interface SidePannelProps {
  className?: string;
  chidlren?: React.ReactNode;
  showPannel: boolean;
}
const SideBar: FC<SideBarProps> = (props) => {
  // This is for fixing the darkMode effect
  // gives a delay to get the right context
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      {hasMounted ? (
        <SidePannel showPannel={props.active}>
          <ProfilePhoto>
            <Image src={profilePic} alt="profile" width={150} height={150} />
          </ProfilePhoto>
          <Name>Mehran Shahidi</Name>
          <SocialContacts />
          <DarkModeToggle
            isDarkMode={darkMode.value}
            toggleDarkMode={darkMode.toggle}
          />
        </SidePannel>
      ) : null}
    </>
  );
};

const ProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
`;
const Name = styled.h2`
  color: var(--fg-color);
`;
const SidePannel = styled.div<{ showPannel: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.showPannel ? "0" : "-20rem")};
  right: 0;
  margin-top: var(--notion-header-height);
  bottom: 0;
  overflow: hidden;
  display: none;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  height: calc(100% - var(--notion-header-height));
  z-index: 200;
  text-align: center;
  background: transparent;
  box-shadow: inset 0 -1px 0 1px rgb(0 0 0 / 10%);
  backdrop-filter: saturate(180%) blur(8px);
  padding: 2rem;
  width: 20rem;
  transition: all 0.5s ease-in-out;
  ${mq[3]} {
    display: flex;
  }
`;

export default SideBar;
