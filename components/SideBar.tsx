import React, { FC } from "react";
import Image from "next/image";
import profilePic from "../public/profile.svg";
import styles from "./sidebar.module.css";
interface SideBarProps {
  className?: string;
  chidlren?: React.ReactNode;
}

const SideBar: FC<SideBarProps> = () => {
  return (
    <div className={styles.sidebar}>
      <div className="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="user">
        <Image src={profilePic} alt="profile" width={200} height={200} />
      </div>
      <h2>Mehran Shahidi</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
        dolore velit commodi delectus expedita magni odio doloribus alias, quo
        facilis, tenetur unde voluptatem quis perspiciatis illo distinctio ips
      </p>
      <div className="links">
        <div className="link">
          <i className="small material-icons">dashboard</i>
          <span>Dashboard</span>
        </div>
        <div className="link">
          <i className="small material-icons">account_circle</i>
          <span>My Account</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
