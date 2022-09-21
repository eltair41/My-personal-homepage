import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "./github.svg";

export const Section = styled.section`
  margin-top: 72px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const StyledIcon = styled(GitHubIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

export const Header = styled.header`
  text-align: center;
`;

export const MyRecentProjects = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-top: 8px;
  color:  ${({ theme }) => theme.colors.textPrimary};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
  }
`;
