import styled from "styled-components";

export const List = styled.ul`
  margin-top: 50px;
  margin-bottom: 0;
  display: flex;
  list-style: none;
  padding: 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 40px;
  }
`;

export const Item = styled.li`
  transition: transform 0.3s;

  &:not(:last-child) {
    margin-right: 24px;
  }

  &:hover {
    transform: translateY(-5px);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-right: 16px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary}
  }
`;

export const styleIcon = Icon => styled(Icon)`
  height: auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px)  {
    width: 32px;
  }
`;