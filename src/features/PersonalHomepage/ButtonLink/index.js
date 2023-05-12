import styled from "styled-components";

export const ButtonLink = styled.a`
  position: relative;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  padding: 16px 18px;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  background: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.buttonLink.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  z-index: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.colors.buttonLink.hover};
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
