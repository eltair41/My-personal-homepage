import styled from "styled-components";
import α from "color-alpha";

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  list-style: none;
  padding: 0;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    grid-gap: 24px;
    grid-template-columns: 1fr;
  }
`;

export const TileItem = styled.li`
  padding: 56px;
  margin: 0;
  background: ${({theme}) => theme.colors.boxBackground};
  border: 6px solid ${({theme}) => theme.colors.tile.border};
  transition: border-color 0.3s;
  box-shadow: ${({theme}) => theme.boxShadow};
  border-radius: ${({theme}) => theme.borderRadiusSmall};

  &:hover {
    border-color: ${({theme}) => theme.colors.tile.borderHover};
  }

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    padding: 24px;
  }
`;

export const ProjectName = styled.h3`
  font-size: 24px;
  color: ${({theme}) => theme.colors.tile.header};
  margin: 0;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Descripiton = styled.p`
  line-height: 1.4;
  margin-top: 24px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const LinksWrapper = styled.dl`
  margin-top: 24px;
  margin-bottom: 0;
  display: grid;
  grid-gap: 8px;
  line-height: 1.6px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const LinkRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinkValue = styled.dd`
  margin: 0px;
`;

export const Link = styled.a`
  color: ${({theme}) => theme.colors.primary};
  padding-bottom: 1px;
  text-decoration: none;
  border-bottom: 1px solid ${({theme}) => α(theme.colors.primary, 0.3)};

  &:hover {
    border-color: unset;
  }
`;