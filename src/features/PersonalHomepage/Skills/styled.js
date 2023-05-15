import styled from "styled-components";
import { SubHeader } from "../SubHeader";

export const Section = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  list-style: none;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
    margin-top: 48px;
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
