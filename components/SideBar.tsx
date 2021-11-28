import React, { FC } from "react";
import Image from "next/image";
import profilePic from "../public/profile.svg";
import styles from "./sidebar.module.css";
import SocialContacts from "./SocialContacts";
import styled from "styled-components";
import { useState } from "react";
import HamButton from "./HamButton";
import DarkModeToggle from "./DarkModeToggle";

interface SideBarProps {
  className?: string;
  chidlren?: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface SidePannelProps {
  className?: string;
  chidlren?: React.ReactNode;
  showPannel: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const SidePannel: FC<SidePannelProps> = (props) => {
  return (
    <div className={props.className}>
      <div className={styles.profilePhoto}>
        <Image src={profilePic} alt="profile" width={150} height={150} />
      </div>
      <h2 className={styles.name}>MohammadMehran Shahidi</h2>
      <p className={styles.bio}>
        I am MohammadMehran Shahidi, a software developer who does things
        sometimes and occasionally writes about them.
      </p>
      {/* <div className="links">
        <div className="link">
          <i className="small material-icons">home</i>
          <span>Dashboard</span>
        </div>
        <div className="link">
          <i className="small material-icons">account_circle</i>
          <span>My Account</span>
        </div>
      </div> */}
      <SocialContacts />

      <DarkModeToggle
        className={styles.darkModeToggle}
        isDarkMode={props.isDarkMode}
        toggleDarkMode={props.toggleDarkMode}
      />
    </div>
  );
};

const StyledSidePannel = styled(SidePannel)<SidePannelProps>`
  position: fixed;
  top: var(--notion-header-height);
  left: ${(props) => (props.showPannel ? "0" : "-20rem")};
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  z-index: 200;
  text-align: center;
  background-color: var(--bg-color-0);
  padding: 2rem;
  width: 20rem;
  transition: all 0.5s ease-in-out;
`;
const SideBar: FC<SideBarProps> = (props) => {
  const [showPannel, setShowPannel] = useState(true);
  return (
    <>
      <HamButton active={showPannel} setActive={setShowPannel} />
      <StyledSidePannel
        isDarkMode={props.isDarkMode}
        toggleDarkMode={props.toggleDarkMode}
        showPannel={showPannel}
      />
    </>
  );
};

export default SideBar;
