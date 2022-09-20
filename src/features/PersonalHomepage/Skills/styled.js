import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import { ReactComponent as BulletIcon } from "./bullet_icon.svg";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.boxBackground};
  padding: 32px;
  margin-top: 72px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
    margin-top: 48px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 32px;
  margin-top: 32px;
  padding: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    margin-top: 12px;
    font-size: 14px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  line-height: 1.4;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    line-height: 1.2;
  }
`;

export const Bullet = styled(BulletIcon)`
  margin-right: 16px;
  height: auto;
  color: ${({theme}) => theme.colors.primary};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-right: 8px;
    width: 6px;
  }
`;

export const StyledHeaader = styled(SubHeader)`
  padding-bottom: 16px;
  border-bottom: 2px solid ${({theme}) => theme.colors.headerLine};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 12px;
  }
`;