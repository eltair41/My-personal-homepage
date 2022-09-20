import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 120px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const LetsTalk = styled.h2`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: initial;
  margin: 0;
  text-transform: uppercase;
`;

export const Address = styled.address`
  font-style: unset;
`;

export const EmailWrapper = styled.div`
  margin: 24px 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 12px 0;
  }
`;

export const Email = styled.a`
  font-weight: 900;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.4;
  max-width: 670px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;