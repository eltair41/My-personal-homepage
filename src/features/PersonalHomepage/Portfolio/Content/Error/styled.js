import styled from "styled-components";

export const Wrapper = styled.article`
  margin-top: 96px;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: grid;
  grid-gap: 32px;
  justify-items: center;
  text-align: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 24px;
  }
`;

export const Header = styled.header`
  font-weight: 700;
  font-size: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  margin: 0;
  line-height: 1.4;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

