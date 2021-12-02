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
}

interface SidePannelProps {
  className?: string;
  chidlren?: React.ReactNode;
  showPannel: boolean;
}
const ProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
`;
const Name = styled.h2`
  color: var(--fg-color);
`;
const SidePannel: FC<SidePannelProps> = (props) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={props.className}>
      <ProfilePhoto>
        <Image src={profilePic} alt="profile" width={150} height={150} />
      </ProfilePhoto>
      <Name>Mehran Shahidi</Name>
      <SocialContacts />

      <DarkModeToggle
        isDarkMode={darkMode.value}
        toggleDarkMode={darkMode.toggle}
      />
    </div>
  );
};

const StyledSidePannel = styled(SidePannel)<SidePannelProps>`
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
const SideBar: FC<SideBarProps> = (props) => {
  return (
    <>
      <StyledSidePannel showPannel={props.active} />
    </>
  );
};

export default SideBar;
