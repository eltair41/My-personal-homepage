import styled from "styled-components";

export const ButtonLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;