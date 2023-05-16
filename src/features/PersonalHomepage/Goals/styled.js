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
  margin-bottom: 24px;
  text-align: center;
  margin-top: 124px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding-bottom: 12px;
  }
`;

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
    margin-top: 48px;
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
`;
