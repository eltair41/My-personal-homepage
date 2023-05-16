import styled, { keyframes } from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet_icon.svg";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Tile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const styledIcon = (icon) =>
  styled(icon).attrs(({ theme }) => ({
    fill: theme.iconColor,
    width: "30px",
    height: "30px",
  }))``;

export const SkillsContent = styled.li`
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.site.text};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  text-align: left;
  opacity: 0;

  &.animate {
    animation: ${fadeIn} 1s forwards;
  }

  &:nth-child(1) {
    animation-delay: 0ms;
  }

  &:nth-child(2) {
    animation-delay: 100ms;
  }

  &:nth-child(3) {
    animation-delay: 200ms;
  }

  &:nth-child(4) {
    animation-delay: 300ms;
  }

  &:nth-child(5) {
    animation-delay: 400ms;
  }
`;

export const List = styled.ul`
  margin: 15px 0 20px 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 12px 5px 15px 8px;
    font-size: 14px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    line-height: 1.2;
  }
`;

export const Bullet = styled(BulletIcon)`
  margin-right: 16px;
  height: auto;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-right: 8px;
    width: 6px;
  }
`;
