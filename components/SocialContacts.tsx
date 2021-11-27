import React, { FC } from "react";
import { FaYoutube, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from "./social.module.css";

export const YouTubeLink =
  "https://www.youtube.com/channel/UCMsxbz4QS32ZqIrMSNcMH7Q";
const GitHubLink = "https://github.com/m3hransh";
const LinkedIn = "https://www.linkedin.com/in/mohammad-mehran-shahidi";

const TwitterLink = "https://twitter.com/Mehran87049642";
interface SocialContactsProps {
  className?: string;
  chidlren?: React.ReactNode;
}

const SocialContacts: FC<SocialContactsProps> = () => {
  return (
    <div className={styles.socialBlock}>
      <h2 className={styles.header}>Contacts</h2>
      <div className={styles.socialList}>
        <a target="_blank" rel="noreferrer" href={YouTubeLink}>
          <FaYoutube className={styles.socialIcon} />
        </a>
        <a target="_blank" rel="noreferrer" href={GitHubLink}>
          <FaGithub className={styles.socialIcon} />
        </a>
        <a target="_blank" rel="noreferrer" href={LinkedIn}>
          <FaLinkedinIn className={styles.socialIcon} />
        </a>
        <a target="_blank" rel="noreferrer" href={TwitterLink}>
          <FaTwitter className={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
};

export default SocialContacts;
