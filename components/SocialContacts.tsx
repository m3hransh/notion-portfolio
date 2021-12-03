import React, { FC } from "react";
import { FaYoutube, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

//TODO: use config file instead of these links
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
    <SocialBlock>
      <Head2>Contacts</Head2>
      <SocialList>
        <SocialIcon target="_blank" rel="noreferrer" href={YouTubeLink}>
          <FaYoutube style={{ height: "100%", width: "100%" }} />
        </SocialIcon>
        <SocialIcon target="_blank" rel="noreferrer" href={GitHubLink}>
          <FaGithub style={{ height: "100%", width: "100%" }} />
        </SocialIcon>
        <SocialIcon target="_blank" rel="noreferrer" href={LinkedIn}>
          <FaLinkedinIn style={{ height: "100%", width: "100%" }} />
        </SocialIcon>
        <SocialIcon target="_blank" rel="noreferrer" href={TwitterLink}>
          <FaTwitter style={{ height: "100%", width: "100%" }} />
        </SocialIcon>
      </SocialList>
    </SocialBlock>
  );
};

const SocialBlock = styled.div`
  margin-top: auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const SocialList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 3rem;
  gap: 0.5rem;
  justify-content: space-evenly;
`;
const SocialIcon = styled.a`
  width: 3rem;
  height: 3rem;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) =>
    theme.darkMode.value ? theme.dark.primary : theme.light.primary};
  &:hover {
    color: ${({ theme }) =>
      theme.darkMode ? theme.dark.secondary : theme.light.secondary};
    transform: scale(1.1);
  }
`;
const Head2 = styled.h2`
  color: ${({ theme }) =>
    theme.darkMode.value ? theme.dark.primary : theme.light.primary};
`;

export default SocialContacts;
