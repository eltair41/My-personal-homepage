import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";

export const Wrapper = styled.header`
  margin-top: -30px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 33px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Photo = styled.img`
  max-width: 384px;
  width: 30vw;
  border-radius: 50%;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 132px;
  }
`;

export const ThisIs = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: initial;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 12px 0 0 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Summary = styled.p`
  max-width: 650px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  margin: 36px 0 0 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    max-width: 570px;
  }
`;

export const StyledButton = styled(ButtonLink)`
  position: relative;
  display: inline-block;
  margin-top: 32px;
  align-items: center;
  cursor: pointer;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
  }
`;