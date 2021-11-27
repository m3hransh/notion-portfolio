import React, { FC, useState } from "react";
import styled from "styled-components";

interface HamButtonProps {
  className?: string;
  chidlren?: React.ReactNode;
  active: boolean;
  setActive: (v: boolean) => void;
}
const Burger = styled.label`
  background-color: #b6edc8;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const Icon = styled.span<{ clicked: boolean }>`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
const HamButton: FC<HamButtonProps> = ({ className, active, setActive }) => {
  const handleClick = () => setActive(!active);
  return (
    <Burger onClick={handleClick} htmlFor="navi-toggle">
      <Icon clicked={active}>&nbsp;</Icon>
    </Burger>
  );
};
const styledHamButton = styled(HamButton)<HamButtonProps>`
  height: var(--notion-header-height);
  width: var(--notion-header-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 300;
  background-color: "#fff";
  cursor: pointer;
  tranition: all 0.5s ease-in-out;
  border: 3px solid #fff;
`;

export default styledHamButton;
