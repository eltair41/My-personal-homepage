import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sunIcon.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  color: inherit;
  outline-offset: 8px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 12px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Box = styled.span`
  width: 48px;
  padding: 3px;
  display: flex;
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid;
  border-radius: 12px;
`;

export const IconContainer = styled.span`
  display: flex;
  background: currentColor;
  padding: 3px;
  border-radius: 50%;
  transition: transform 0.5s;

  ${({ move }) => move && css`
    transform: translate(20px);
  `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;