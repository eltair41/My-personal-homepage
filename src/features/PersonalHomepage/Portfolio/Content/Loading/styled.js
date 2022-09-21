import styled, { keyframes } from "styled-components";
import { ReactComponent as LoadingIcon } from "./loading_icon.svg";

export const Wrapper = styled.div`
  margin-top: 88px;
  display: grid;
  justify-items: center;
  text-align: center;
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: 20px;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    font-size: 17px;
    margin-top: 32px;
  }
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(LoadingIcon)`
  height: auto;
  margin-top: 48px;
  color:  ${({theme}) => theme.colors.primary};
  animation: ${rotate} 1s linear infinite;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
    width: 60px;
    margin-top: 32px;
  }
`;