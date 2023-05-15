import styled, { keyframes } from "styled-components";
import { ReactComponent as BulletIcon } from "./bullet_icon.svg";

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
`;

export const styledIcon = (icon) =>
  styled(icon).attrs(({ theme }) => ({
    fill: theme.colors.site.text,
    width: "40px",
    height: "40px",
  }))``;

export const SkillsContent = styled.li`
  font-size: 20px;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.site.text};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  text-align: left;
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
    margin-top: 12px;
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
