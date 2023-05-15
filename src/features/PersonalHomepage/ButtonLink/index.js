import styled from "styled-components";

export const ButtonLink = styled.a`
  position: relative;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  padding: 16px 18px;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  background: ${({ theme }) => theme.colors.primary};
  border: 4px solid ${({ theme }) => theme.colors.primary};
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
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
