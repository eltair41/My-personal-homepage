import styled, { keyframes } from "styled-components";
import { SubHeader } from "../SubHeader";

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

export const StyledHeaader = styled(SubHeader)`
  text-align: center;
  padding-top: 74px;
  padding-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 12px;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 25px;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;
