import styled from "styled-components";

export const SubHeader = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;
  color: ${({theme}) => theme.colors.textPrimary};

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
  }
`;