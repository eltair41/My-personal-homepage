import styled from "styled-components";
import { SubHeader } from "../SubHeader";

export const Section = styled.ul`
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  list-style: none;
  padding-left: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 12px;
    grid-template-columns: 1fr;
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
